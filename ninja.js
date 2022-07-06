class Ninja {
    constructor(name, health = 200){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Name: ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

const spNinja = new Ninja("Sarah");
spNinja.sayName().showStats().drinkSake();