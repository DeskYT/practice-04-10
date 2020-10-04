function indexOfMax(arr){
    if(arr.length == 0 ) return;
    let max = arr[0];
    let maxIndex = 0;
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

function isTriangle(a,b,c) {
    const sides = [a,b,c];
    maxIndex = indexOfMax(sides);
    let sum = 0;
    sides.forEach((val, index) => {
       if (index == maxIndex) return;
       sum += val;
    });
    return sides[maxIndex] < sum;
}
console.log("isTriangle");
console.log(3,4,50)
console.log(isTriangle(3,4,50));
console.log(3,4,5)
console.log(isTriangle(3,4,5));
console.log("<<");

function divide(x,y,z) {
    let res = x;
    while (res > z){
        res /= y;
    }
    return res;
}

function catCon(arr1, arr2){
    res = arr1.concat(arr2).reverse();
    res.push(7,8);
    console.log("catArrPushed: ", res)
    console.log("catArrShifted:", res.shift());
    console.log("catArrPopped:", res.pop());
    return res;
}
console.log("catCon: ", catCon([1,2,3], [4,5,6]));

function getKeys(obj) {
    let res = [];
    for (const key in obj){
        res.push(key);
    }
    return res;
}

console.log("getKeys", getKeys({name1: 'test', name2: 'js', name3: 'hello'}));

class Worker{
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}

const worker1 = new Worker("nm", "snm", 500, 20);
console.log(worker1);
console.log(worker1.getSalary());