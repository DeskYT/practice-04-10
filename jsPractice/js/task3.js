/*class User{
    constructor(name, surname, money) {
        this.name = name;
        this.surname = surname;
        this.money = money
    }
    canBuyFlat(){
        const flatBuyPromise = new Promise((resolve, reject) => {
            if(this.money >= 15000) resolve("Yeah, u can do it now!")
            else reject("Not enough money!")
        })
        flatBuyPromise.then((successMessage) => {
            console.log(successMessage)
            return(successMessage)
        });
    }
}

const user1 = new User("John", "Smith", 15000);
user1.canBuyFlat()*/
class User{
    constructor(name, surname, money) {
        this.name = name;
        this.surname = surname;
        this.money = money
    }
    async canBuyFlat(){
        const flatBuyPromise = new Promise((resolve, reject) => {
            if(this.money >= 15000) resolve("Yeah, u can do it now!")
            else reject("Not enough money!")
        })
        const res = await flatBuyPromise;
        return res;
    }
}

const user1 = new User("John", "Smith", 15000);
user1.canBuyFlat().then(console.log)


