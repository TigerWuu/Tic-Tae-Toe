import Component from "./component.js"

export default class Banner extends Component{
    constructor(root, firstTurn){
        super(root)
        this.turn = firstTurn;
        this.xBox = this.root.querySelector(".X");
        this.oBox = this.root.querySelector(".O");
    }

    static getRoot(){
        return ".banner";
    }

    getTurn(){
        return this.turn;
    }

    setTurn(turn){
        this.turn = turn;
    }

    setWinner(winner){
        window.alert(winner);
    }

    displayTurn(){
        if (this.getTurn() === "X"){
            this.xBox.classList.add("turnMark");
            this.oBox.classList.remove("turnMark");
        }
        else{
            this.xBox.classList.remove("turnMark");
            this.oBox.classList.add("turnMark");
            // this.box = this.root.querySelector(".O");
            // this.box.style.border = "red solid 3px";
            // this.box.style.borderRadius = "1rem";
      
        }
    }

    reset(){
        this.displayTurn();
    }
}