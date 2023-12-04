import { type ProductCardFragment } from '../../generated/graphql'
export default function (type: 'client' | 'server') {
    const key = 'basket';
    function getBaskets(): any[] {
        let data = localStorage.getItem(key);
        if (data == null) {
            return []
        }
        return JSON.parse(localStorage.getItem(key) || '') || [];
    }
    return {
        client: {
            add: function (item: unknown) {
                let data = getBaskets();
                const productItem = item as ProductCardFragment;
                console.log(productItem.id)
                let existItem = data.some(x => x.id === productItem.id)

                if (existItem) return
                console.log(item)
                localStorage.setItem(key, JSON.stringify([item, ...getBaskets()]))
            },
            del: function (id: string | string[]) {
                console.log(id)
                return localStorage.setItem(key, JSON.stringify(getBaskets().filter(x => x.id !== id)))
            }
        },
        server: {
            getFavorites:function(){},
            add:function(){},
            del:function(){}
        }
    }[type]

}
