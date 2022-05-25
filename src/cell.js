import Component from "./component.js";

export default class Cell extends Component{
    constructor(root){
        super(root);
        this.root.addEventListener("click", this.handleDomClick.bind(this)); // bind(this) ??? Ans: if we don't add bind this, "this" here is represent the "root", namley "td".
        this.mark = "";
        // console.log(root);
    }

    static getRoot(){
        return ".cell";
    }

    handleDomClick(e){
        console.log(this.pub);
        this.pub("cellClick",this.setMark.bind(this), this.mark);
    }

    getMark(){
        return this.mark;
    }

    setMark(mark){
        this.root.textContent = mark;
        this.mark = mark;
    }
 
    reset(){
        this.root.textContent = "";
        this.mark = "";
    }

}