export default {
    formatter : function(data:number|string, format:string) {
        let value = data;
        switch(format) {
            case 'number' : 
                const nf = Intl.NumberFormat();
                value = nf.format(+data);
                break;
            case 'date' : 
                const dt = new Date(data);
                value = dt.getFullYear() + "-" + ((dt.getMonth() +1)+'').padStart(2,'0') + "-" +  (dt.getDate()+'').padStart(2, '0');
                break;
        }
        return value;
    },
    buildTableParam : (tabId:string, listData:(number|string)[], headers:string[], keys:string[], colTypes:string[]) => {return {tabId, listData, headers, keys, colTypes}}

}