function maxNumber(arr){
    if(arr.length===0){
        return null;
    }else{
        return Math.max(...arr)
    }
}

console.log(maxNumber([12,34,56,78,234,1]))

function max(arr){
    let maxValue=arr[0]
    if(arr.length===0){
        return null;
    }else{
        
        for(let i=0;i<arr.length;i++){
            if(arr[i]>maxValue){
                maxValue=arr[i]
            }
        }
    }return maxValue;
}

console.log(max([12,34,56,78,234,567,890]))

function max1(arr){
    return arr.reduce((acc,curr)=>acc>curr?acc:curr,arr[0])
}
console.log(max1([45,23,67,89,54,32,100]))

function max2(arr){
    let sort=arr.sort((a,b)=>b-a)
    return arr[0]
}
console.log(max2([23,445,67,89,12,900,34]))