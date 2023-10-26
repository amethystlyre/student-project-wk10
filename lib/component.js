class Component{
    constructor(children =[]){
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
        return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>.`;
    }


}

class TaskListItem extends Component {
    constructor(children =[], priority){
        super(children);
        this.priority =priority;
        
    }


    render(){
        if(priority){
            return `<li class="tasks-item tasks-item-priority">{INNER_HTML}</li>.`;
        }
        else{
            return `<li class="tasks-item">{INNER_HTML}</li>.`;
        }
    }


}

class TaskList extends Component {
    constructor(children =[], priority){
        super(children);      
    }


    render(){
        return `<ul class="tasks">{INNER_HTML}</ul>`;
    }


}


