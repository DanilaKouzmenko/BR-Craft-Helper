const n = document.createElement('br'); // \n
const makeSpan = () => {return document.createElement('span')}

const rarities = {
    обычный: "#e0e0e0",
    необычный: "#21CF0B",
    редкий: "#4E9FEE",
    эпический: "#B083E2",
    легендарный: "#EBCC3D"
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
    cotton: new Primitive("Текстильное волокно"),
    reagents: new Primitive("Реагенты"),
    boxites: new Primitive("Бокситы"),
    skin: new Primitive("Шкура животного"),
    wood: new Primitive("Древесина"),
    bottle: new Primitive("Пластиковая бутылка"),
    rubb: new Primitive("Обрезки резины")
};

const instructs = {
    dye: new Primitive('Чертеж Краски'),
    aluminum: new Primitive('Чертеж Алюминия'),
    vv40: new Primitive('Чертеж ВВ-40'),
    iron: new Primitive('Чертеж Железа'),
    glue: new Primitive('Чертеж Клея'),
    leather: new Primitive('Чертеж кожи'),
    fastener: new Primitive('Чертеж крепежа'),
    strings: new Primitive('Чертеж нитей'),
    lumber: new Primitive('Чертеж пиломатериалов'),
    plastic: new Primitive('Чертеж пластика'),
    rubber: new Primitive('Чертеж резины')
};

class Item {
    constructor(name, chance, time, recipe, type = "обычный") {
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

const res = {
    dye: new Item('Краска', 70, 120, [ {count: 1, this: instructs.dye}, {count: 11, this: primitives.reagents} ]),
    aluminum: new Item('Алюминий', 70, 120, [ 
        {count: 1, this: instructs.aluminum}, {count: 7, this: primitives.boxites}, {count: 5, this: primitives.reagents} ]),
    vv40: new Item("ВВ-40", 70, 120, [ {count:1, this: instructs.vv40}, { count:10, this:primitives.reagents } ]),
    iron: new Item("Железо", 70, 120, [ {count:1, this: instructs.iron}, { count: 9, this: primitives.raw_iron } ]),
    glue: new Item("Клей", 70, 120, [ { count: 1, this: instructs.glue }, { count: 12, this: primitives.reagents } ]),
    leather: new Item("Кожа", 70, 120, [ { count: 1, this: instructs.leather }, { count: 10, this: primitives.skin } ]),
    fastener: new Item("Крепеж", 70, 120, [ { count: 1, this: instructs.fastener }, { count: 12, this: primitives.scrap } ]),
    strings: new Item("Нити", 70, 120, [ { count: 1, this: instructs.strings }, { count: 8, this: primitives.cotton } ]),
    lumber: new Item("Пиломатериалы", 70, 120, [ { count: 1, this: instructs.lumber }, { count: 12, this: primitives.wood } ]),
    plastic: new Item("", 70, 120, [ { count: 1, this: instructs.plastic }, { count: 11, this: primitives.bottle } ]),
    rubber: new Item("", 70, 120, [ {count: 1, this: instructs.rubber}, { count: 10, this: primitives.rubb } ])
};

const items = {
    dye: res.dye,
    aluminum: res.aluminum,
    vv40: res.vv40,
    iron: res.iron,
    glue: res.glue,
    leather: res.leather,
    fastener: res.fastener,
    strings: res.strings,
    lumber: res.lumber,
    plastic: res.plastic,
    rubber: res.rubber
}

const urlParams = new URLSearchParams(window.location.search);
const itemParam = urlParams.get('item');

items[itemParam].show();