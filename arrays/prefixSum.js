function prefixSum(arr){
    let array=[];
    let index=0
    for(let i=0;i<arr.length;i++){
if(i===0){
    array[index]=arr[i]
}else{
    array[index]=arr[i]+arr[i-1]
}index++
    }return array
}

console.log(prefixSum([1,2,3,4,5]))