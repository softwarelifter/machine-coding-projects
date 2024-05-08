import Board from "../models/Board";
import Dice from "../models/Dice";
import Player from "../models/Player";


class Game {
    players: Player[] = [];
    board: Board;

    constructor(players: string[], board: Board) {
        this.board = board;
        players.forEach(player => this.players.push(new Player(player)));
    }

    play() {
        const dice = new Dice(1);
        let currentPlayerIndex = 0;

        while (true) {
            const currentPlayer = this.players[currentPlayerIndex];
            dice.roll();
            const newPosition = currentPlayer.position + dice.faceValue;

            if (newPosition > this.board.size) {
                currentPlayerIndex = (currentPlayerIndex + 1) % this.players.length;
                continue;
            }

            currentPlayer.position = this.getNewPosition(newPosition);
            if (currentPlayer.position === this.board.size) {
                console.log(`${currentPlayer.name} wins!`);
                break;
            }

            currentPlayerIndex = (currentPlayerIndex + 1) % this.players.length;
        }
    }

    getNewPosition(position: number): number {
        const snakes = this.board.snakes;
        const ladders = this.board.ladders;

        if (snakes[position]) {
            console.log(`Snake bit ${position}`);
            return snakes[position];
        }

        if (ladders[position]) {
            console.log(`Ladder climbed ${position}`);
            return ladders[position];
        }

        return position;
    }
}

export default Game;