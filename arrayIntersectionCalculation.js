function intersection(arr1, arr2){
    let result=[]
    for (let num of arr1){
        if(arr2.includes(num) && !result.includes(num)){
            result.push(num)
        }
    }return result;
}

console.log(intersection([1, 2, 3], [3, 4, 5]))