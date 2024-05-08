class Dice {
    constructor(private _faceValue: number) { }

    get faceValue() {
        return this._faceValue;
    }

    roll() {
        this._faceValue = Math.floor(Math.random() * 6) + 1;
    }
}

export default Dice;