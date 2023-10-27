const {formatDate} = require("./date.js")

class Component{
    constructor(children = []){
        this.children = children
    }

    render(){
        throw new Error('Child class must implement render() method.');
    }

    renderInnerHTML(){
        return this.children.map((element)=>{
            if (typeof element == 'string'){
                return element;
            }
            return element.render();
        }).join('');
    }
}

class Header extends Component{

    render(){
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`;
    }
}

class TaskListItem extends Component {
    constructor(children, priority = false ){
        super(children);
        this.priority =priority;        
    }

    render(){
        if(this.priority){
            return `<li class="tasks-item tasks-item-priority">${this.renderInnerHTML()}</li>`;
        }
        else{
            return `<li class="tasks-item">${this.renderInnerHTML()}</li>`;
        }
    }

}

class TaskList extends Component {
    constructor(children){
        super(children);      
    }

    render(){
        return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
    }

}


module.exports = {
    Header,
    TaskList,
    TaskListItem
  };