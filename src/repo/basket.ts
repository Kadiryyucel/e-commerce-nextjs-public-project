export default function (type: 'client' | 'server') {
    const key = 'basket';
    function getBaskets(): any[] {
        let data = localStorage.getItem(key);
        if (data == null) {
            return []
        }
        return JSON.parse(localStorage.getItem(key) || '');
    }
    return {
        client: {
            add: function (item: any) {
                let data = getBaskets();
                let existItem = data.some(x => x.id === item.id)
                if (existItem) return
                localStorage.setItem(key, JSON.stringify([item, ...getBaskets()]))
            },
            del: function (id: number) {
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
