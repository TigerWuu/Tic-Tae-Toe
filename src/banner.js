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

    displayTurn(){
        if (this.getTurn() === "X"){
            this.xBox.classList.add("mark");
            this.oBox.classList.remove("mark");
        }
        else{
            this.xBox.classList.remove("mark");
            this.oBox.classList.add("mark");
            // this.box = this.root.querySelector(".O");
            // this.box.style.border = "red solid 3px";
            // this.box.style.borderRadius = "1rem";
      
        }
    }
    switch(turn){
        ;
    }
}