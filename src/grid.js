import Component from "./component.js"
import Cell from "./cell.js"

export default class Grid extends Component{
    constructor(root, firstTurn){
        super(root);
        this.turn = firstTurn;
        this.cells = [];
        var els = root.querySelectorAll(Cell.getRoot());
        for (var index=0; index< els.length; index++){
            var cell = new Cell(els[index]);
            cell.reg("cellClick", this.handleCellClick.bind(this));
            this.cells.push(cell);
            console.log(this.cells);
        }
    }

    static getRoot(){
        return ".grid";
    }

    getTurn(){
        return this.turn;
    }
    setTurn(turn){
        this.turn = turn;
    }

    switch(){
        if (this.getTurn()==="X"){
            this.setTurn("O");
        }
        else{
            this.setTurn("X");
        }
    }

    handleCellClick(set){
        set(this.getTurn());
        this.switch();
        this.pub("gridClick", this.getTurn());
    }


}