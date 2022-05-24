function descendingOrder(n){
    let arr = n.toString().split('').sort().reverse();
    let str = arr.join('');
    let num = parseInt(str);
    
    return num;
}

// one line version:
// return parseInt(n.toString().split('').sort().reverse().join(''));
