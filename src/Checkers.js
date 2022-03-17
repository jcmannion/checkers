import { observable, makeObservable, action } from 'mobx'

export class Player {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
}

export class Checkers {
    playerOne = new Player()
    playerTwo = new Player()

    constructor() {
        makeObservable(this, {
            playerOne: observable,
            playerTwo: observable,
            updatePlayers: action
        });
    }

    updatePlayers(players) {
        this.playerOne = players.pop()
        this.playerTwo = players.pop()
    }
}