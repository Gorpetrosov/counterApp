export default function (arr) {
    const initialValue = 0;
    if(arr && Array.isArray(arr)){
        return arr.reduce(function (accumulator, currentValue) {
           return accumulator + currentValue.count
       }, initialValue);
    }else{
        return initialValue;
    }
}