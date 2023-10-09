
const key='favorites';

export function getFavorites():any[]{
    let data= localStorage.getItem(key);
    if(data==null){
        return[]
    }
    return JSON.parse(localStorage.getItem(key) || '');
}

export function add(item:any){
    localStorage.setItem(key,JSON.stringify([item,...getFavorites()]))
}

export function del(id:number){
    return localStorage.setItem(key,JSON.stringify(getFavorites().filter(x=>x.id !== id)))
}
