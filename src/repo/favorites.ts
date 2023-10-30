import { type ProductCardFragment } from '../../generated/graphql'

export default function (type: 'client' | 'server') {
    const key = 'favorites';
    function getFavorites(): any[] {
        let data = localStorage.getItem(key);
        if (data == null) {
            return []
        }
        return JSON.parse(localStorage.getItem(key) || '') || [];
    }
    return {
        client: {
            add: function (item: ProductCardFragment) {
                let data = getFavorites();
                let existItem = data.some((fav:ProductCardFragment)=>fav.id === item.id)
                if (existItem) return
                localStorage.setItem(key, JSON.stringify([item, ...getFavorites()]))
            },
            del: function (id: string) {
                return localStorage.setItem(key, JSON.stringify(getFavorites().filter(x => x.id !== id)))
            }
        },
        server: {
            getFavorites:function(){
                return []
            },
            add:function(){},
            del:function(){}
        }
    }[type]

}
