export default class Character {
  constructor(name, type) {
    this._name = name;
    this._type = type;
    this.health = 100;
    this.level = 1;
  }

  get type() {
    switch (true) {
      case (Character.types.includes(this._type)):
        return this._type;
      default:
        throw new Error('Недопустимый тип персонажа');
    }
  }

  get name() {
    switch (true) {
      case (this._name.length < 2 || this._name.length > 10):
        throw new Error('Недопустимая длина имени');
      default:
        return this._name;
    }
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
