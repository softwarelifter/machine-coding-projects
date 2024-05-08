interface Snake {
    [key: number]: number
}

interface Ladder {
    [key: number]: number
}

class Board {
    private _size: number;
    private _snakes: Snake;
    private _ladders: Ladder;

    constructor(size: number, snakes: Snake, ladders: Ladder) {
        this._size = size;
        this._snakes = snakes;
        this._ladders = ladders;
    }

    get size(): number {
        return this._size;
    }

    get snakes(): Snake {
        return this._snakes;
    }

    get ladders(): Ladder {
        return this._ladders;
    }
}

export default Board;