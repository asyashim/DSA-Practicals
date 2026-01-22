
function print(arr, i = arr.length - 1) {
    if (i < 0) return;      

    console.log(arr[i]);   
    print(arr, i - 1);     
}

print([10, 20, 30, 40, 50]);
