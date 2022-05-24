import Component from "./component.js";
import Banner from "./banner.js";

export default class Cell extends Component{
    constructor(root){
        super(root);
        root.addEventListener("click", this.handleDomClick.bind(this)); // bind(this) ??? Ans: if we don't add bind this, "this" here is represent the "root", namley "td".
        console.log(root);
    }

    static getRoot(){
        return ".cell";
    }

    handleDomClick(e){
        console.log(this.pub);
        this.pub("cellClick",this.set.bind(this));
    }

    set(mark){
        this.root.textContent = mark;
    }
 
    reset(){

    }

}