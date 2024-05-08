class Player {
    private _name: string;
    private _position: number;

    constructor(name: string) {
        this._name = name;
        this._position = 0;
    }

    get name(): string {
        return this._name;
    }

    get position(): number {
        return this._position;
    }

    set position(position: number) {
        this._position = position;
    }
}

export default Player;