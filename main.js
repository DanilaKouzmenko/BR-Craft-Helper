const n = document.createElement('br'); // \n
const makeSpan = () => {return document.createElement('span')}

const rarities = {
    ordinary: "#e0e0e0",
    extraordinary: "#21CF0B",
    rare: "#4E9FEE",
    epic: "#B083E2",
    legendary: "#EBCC3D"
};

class Primitive {
    constructor(name, type = 'обычный') {
        this.name = name;
        this.type = type;
    }
}

const primitives = {
    raw_iron: new Primitive("Железная руда"),
    scrap: new Primitive("Металлолом"),
    cotton: new Primitive("Хлопок"),
    reagents: new Primitive("Реагенты")
};

const instructs = {
    dye: new Primitive('Чертеж Краски')
};

class Item {
    constructor(type = "обычный", name, chance, time, recipe) {
        this.type = type;
        this.name = name;
        this.chance = chance;
        this.time = time;
        this.recipe = recipe;
    }
    show() {
        document.getElementById('name').innerHTML = this.name;
        document.getElementById('rarity').innerHTML = this.type;
        document.getElementById('time').innerHTML = this.time;
        document.getElementById('chance').innerHTML = this.chance;
        const rec = document.getElementById('recipe');
        const prec = document.getElementById('primitive');
        for (let item of this.recipe) {
            let span_count = document.createElement('span');
            let span_name = document.createElement('span');
            span_count.innerHTML = item.count;
            span_name.innerHTML = ' ' + item.this.name;
            span_name.style.color = rarities[item.this.type];
            rec.appendChild(span_count);
            rec.appendChild(span_name);
            rec.appendChild(n.cloneNode());
        }
    }
}

const items = {
    dye: new Item('обычный', 'Краска', 70, 120, [ {count: 1, this: instructs.dye}, {count: 11, this: primitives.reagents} ]),
};

const urlParams = new URLSearchParams(window.location.search);
const itemParam = urlParams.get('item');

items[itemParam].show();