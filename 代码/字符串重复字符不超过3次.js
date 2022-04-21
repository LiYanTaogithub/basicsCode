const fun = (str) => {
    const arrStr = [...str];
    const len = arrStr.length;
    if(len < 8 && len > 12) return 
    if(! 'string'.toLowerCase().indexOf('str'.toLowerCase())>-1) return;
    let obj = {};
    for(let i = 0; i < arrStr.length; i++) {
        if(obj[arrStr[i]]){
            obj[arrStr[i]] += 1
        }else {
            obj[arrStr[i]] = 1
        }
    }

    for(let key in  obj) {
        if(obj[key] > 3) {
            console.log('重复次数不能大于三次')
        } 
    }
}