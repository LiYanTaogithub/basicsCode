function sum(str1, str2) {
    const arr1 = str1.split(''), arr2 = str2.split('');
    const len1 = arr1.length, len2 = arr2.length;
    const maxLen = Math.max(len1, len2);
    let res = [];
    let flag = false;
    for(let i = 0; i < maxLen; i++){
        let temp;
        let num1 = arr1.pop(), num2 = arr2.pop();
        num1 = num1 ? num1 : 0;
        num2 = num2 ? num2 : 0;
        if(flag) {
            temp = parseInt(num1) + parseInt(num2) + 1;
        }else {
            temp = parseInt(num1) + parseInt(num2)
        }
        if(parseInt(temp/10) > 0) {
            // 有进位
            res.push(temp%10);
            flag = true;
        }else {
            res.push(temp);
            flag = true;
        }
        if(i === maxLen -1 && flag) {
            res.push(1)
        }
    }
    return res.reverse().join('')
}