'use client'
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../storiesRedux/store"
import { setProdutcOfBasket, setProdutcOfFavorites } from "../storiesRedux/reducers"

import { Provider, useSelector } from "react-redux";

import { store } from "../storiesRedux/store"


export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Provider store={store}>
                <StoreMain>
                    {children}
                </StoreMain>
            </Provider>
        </div>
    )
}

function StoreMain({
    children,
}: {
    children: React.ReactNode
}) {
    const favoritesData = useSelector((state: any) => state.products.favorites)
    const dispatch = useAppDispatch();
    useEffect(() => {
        const dataFavorites = localStorage.getItem('favorites');
        const dataBasket = localStorage.getItem('basket');

        if (dataFavorites) {
            let favorites = JSON.parse(dataFavorites)
            dispatch(setProdutcOfFavorites(favorites))
        }
        if (dataBasket) {
            let basket = JSON.parse(dataBasket)
            dispatch(setProdutcOfBasket(basket))
        }

        
        const handleBeforeUnload = () => {
            localStorage.setItem('favorite', JSON.stringify(dataFavorites));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);


        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [])

    return (
        children
    )
}
