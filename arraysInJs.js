const nums=[1,2,3,4,4,1,2,3,2,4,2,2,2,2,2,2]// declaration 
const k=2//target value 
count=0// starting idex postion 
for(let num of nums){//gives each value of the array directly.
    if(num==k){//comparing the data like 1==k
        count++//incremental count  
    }
}
console.log(count)