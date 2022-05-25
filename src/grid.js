import Component from "./component.js"
import Cell from "./cell.js"

export default class Grid extends Component{
    constructor(root, firstTurn){
        super(root);
        this.turn = firstTurn;
        this.cells = [[],[],[]];
        var els = root.querySelectorAll(Cell.getRoot());
        for (var index=0; index< els.length; index++){
            var row = Math.floor(index/3);
            console.log(row);

            var cell = new Cell(els[index]);
            cell.reg("cellClick", this.handleCellClick.bind(this));
            this.cells[row].push(cell);
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

    switchTurn(){
        if (this.getTurn()==="X"){
            this.setTurn("O");
        }
        else{
            this.setTurn("X");
        }
    }

    isCellOccupied(mark){
        if (mark != ""){
            return true;
        }        
        else{
            return false;
        }
    }

    isGameFinished(){
        var isFinished = false;
        for(var i=0;i<this.cells.length;i++){
            var mark = this.cells[0][0].getMark();
            if(this.cells[i][i].getMark() != mark){
                isFinished = false;
            }
        }
    }

    handleCellClick(setMark, mark){
        if(this.isCellOccupied(mark)){
            ;
        }
        else{
            setMark(this.getTurn());
            if(false){
                ;
            }
            else{
                this.switchTurn();
                this.pub("gridClick", this.getTurn());
            }
        }
    }

    reset(){
        for(var i=0; i < this.cells.length; i++){
            for(var j=0; j< this.cells[0].length; j++){
                this.cells[i][j].reset();
            }
        }
    }


}