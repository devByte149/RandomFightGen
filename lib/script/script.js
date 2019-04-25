class Warrior {

    ClassType() {
        this.ClassType = "Warrior";
    }

    HP() {
        this.HP = 150;
    }

    MP() {
        this.MP = 75;
    }

    Stamina() {
        this.Stamina = 125;
    }

    Warrior(inValue) {
        this.Name = inValue;
    }

    Defense() {
        this.Defense = 100;
    }

    MagicDefense() {
        this.MagicDefense = 25;
    }
}

class Thief {
    ClassType() {
        this.ClassType = "Thief";
    }

    HP() {
        this.HP = 100;
    }

    MP() {
        this.MP = 75;
    }

    Stamina() {
        this.Stamina = 200;
    }

    constructor(inValue) {
        this.Name = inValue;
    }

    Defense() {
        this.Defense = 75;
    }

    MagicDefense() {
        this.MagicDefense = 25;
    }
}

class Mage {

    ClassType() {
        this.ClassType = "Mage";
    }

    HP() {
        this.HP = 75;
    }

    MP() {
        this.MP = 200;
    }

    Stamina() {
        this.Stamina = 75;
    }

    Name(inValue) {
        this.Name = inValue;
    }

    Defense() {
        this.Defense = 50;
    }

    MagicDefense() {
        this.MagicDefense = 100;
    }
}