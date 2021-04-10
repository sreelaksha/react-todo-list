import React, {Component} from 'react';
import axios from 'axios';
import TodoEntries from '../components/TodoEntries.js';

class Dashboard extends Component{
    state = {
                 todo_list : [],
                 completed:false,
             }

    componentDidMount () {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    this.setState({todo_list: response.data});
            })
    }

    render(){
        return(
                <div>
                    <TodoEntries data = {this.state.todo_list}/>
                </div>
        );
    }
}

export default Dashboard;