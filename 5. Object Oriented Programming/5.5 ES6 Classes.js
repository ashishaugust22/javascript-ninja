// classes provide pseudo classical inheritance

// classes are not actual classes in JS


class Elf {
    constructor (name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack () {
        return 'atack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja stars');
console.log(fiona instanceof Elf); // 
const ben = new Elf('Ben', 'bow');
fiona.attack();