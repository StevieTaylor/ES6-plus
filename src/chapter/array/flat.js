const oArray = [1, 2, 3, 4, [1, 2, { name: "jack" }, 3, [1, 2, 3, [1, 2, 3]]], 5, "string"];
console.log(oArray.flat());
console.log('flat(1):',oArray.flat(1));
console.log('flat(2):',oArray.flat(2));
console.log('flat(3):',oArray.flat(3));
console.log('flat(Infinity):',oArray.flat(Infinity));

/**
 * 1. forEach+concat+push+递归
 * @param {*} array 
 */
const Flatten = (array) => {
    let res = [];
    array.forEach((item) => {
        Array.isArray(item) ? res = res.concat(Flatten(item)) : res.push(item);
    })
    return res;
}
console.log('function 1', Flatten(oArray));

/**
 * 2. reduce+concat+递归
 * @param {*} array 
 */
const Flatten2 = (array) => {
    return array.reduce((acc, item) => {
        return Array.isArray(item) ? acc.concat(Flatten2(item)) : acc.concat(item);
    }, [])
}
console.log('function 2', Flatten2(oArray));

/**
 * 3. ...+concat+map+递归
 * @param {*} arr 
 */
const Flatten3=(arr)=>{
    return [].concat(...arr.map(item=>{
        return Array.isArray(item)?Flatten3(item):item;
    }))
}
// const Flatten3 = arr => [].concat(...arr.map(v => (Array.isArray(v) ? Flatten3(v) : v)));
console.log('function 3', Flatten3(oArray));

/**
 * 4. reduce+concat+递归
 * @param {*} array 源数组
 * @param {*} depth 降维深度
 */
const FlattenDepth=(array,depth=1)=>{
    if(depth>0){
        return array.reduce((acc,item)=>{
            return acc.concat(Array.isArray(item)?FlattenDepth(item,depth-1):item)
        },[])
    }else{
        return array.slice()
    }
}
console.log('FlattenDepth(1):',FlattenDepth(oArray,1));
console.log('FlattenDepth(2):',FlattenDepth(oArray,2));
console.log('FlattenDepth(3):',FlattenDepth(oArray,3));
console.log('FlattenDepth(Infinity):',FlattenDepth(oArray,Infinity));
