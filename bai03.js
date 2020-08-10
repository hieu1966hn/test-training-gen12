let arr = [100,100,99,98,102,103];
for(let i=0;i<arr.length -1;i++){
    for(let j =i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp =arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log(arr);