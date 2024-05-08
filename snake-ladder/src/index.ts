import * as readline from 'readline';
import Game from './services/Game';
import Board from "./models/Board";

async function getInput(question: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>(resolve => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    const size = parseInt(await getInput('Enter board size: '));
    const snakes = JSON.parse(await getInput('Enter snakes: '));
    const ladders = JSON.parse(await getInput('Enter ladders: '));
    const players = JSON.parse(await getInput('Enter players: '));
    const board = new Board(size, snakes, ladders);
    const game = new Game(players, board);
    game.play();

}

main();