import { type ProductCardFragment } from '../../generated/graphql'

const key='favorites';

export function getFavorites():any[]{
    let data= localStorage.getItem(key);
    if(data==null){
        return[]
    }
    return JSON.parse(localStorage.getItem(key) || '');
}

export function add(item:ProductCardFragment){
    let check = getFavorites().some((fav:ProductCardFragment)=>fav.id === item.id)
    if(check) return
    localStorage.setItem(key,JSON.stringify([item,...getFavorites()]))
}

export function del(id:string){
    localStorage.setItem(key,JSON.stringify(getFavorites().filter(x=>x.id !== id)))
}
