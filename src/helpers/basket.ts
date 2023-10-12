
const key='basket';

export function getBaskets():any[]{
    let data= localStorage.getItem(key);
    if(data==null){
        return[]
    }
    return JSON.parse(localStorage.getItem(key) || '');
}

export function add(item:any){
    let data = getBaskets();
    let existItem = data.some(x=>x.id===item.id)
    if(existItem) return 
    localStorage.setItem(key,JSON.stringify([item,...getBaskets()]))
}

export function del(id:number){
    return localStorage.setItem(key,JSON.stringify(getBaskets().filter(x=>x.id !== id)))
}
