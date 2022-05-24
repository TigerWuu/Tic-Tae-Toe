
import Component from "./component.js";
import Banner from "./banner.js";
import Grid from "./grid.js";

class Main extends Component{
    constructor(root){
        super(root);
        this.firstTurn = "X";
        this.banner = new Banner(root.querySelector(Banner.getRoot()), this.firstTurn);
        this.banner.displayTurn();

        this.grid = new Grid(root.querySelector(Grid.getRoot()), this.firstTurn);
        this.grid.reg("gridClick", this.handleGridClick.bind(this));
    }

    static getRoot(){
        return ".main";
    }
    
    handleGridClick(turn){
        console.log(turn);
        this.banner.setTurn(turn);
        this.banner.displayTurn();
    }
}

window.onload = function(){
    var main = new Main(document.querySelector(Main.getRoot())); 
} 