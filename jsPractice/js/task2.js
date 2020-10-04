class Sequence{
    constructor(start, end, interval=1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    [Symbol.iterator]() {
        let nextIndex = this.start;
        let counter = 0;
        return {
            next: () => {
                if(nextIndex <= this.end){
                    let res = {value: nextIndex, done: false}
                    nextIndex += this.interval;
                    counter++;
                    return res;
                }
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

let res = new Sequence(5,30,7);
for(let i of res) {console.log(i);}