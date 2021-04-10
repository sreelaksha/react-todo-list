import React,{ useEffect, useRef, useState }  from 'react';
import axios from 'axios';
import TodoEntries from '../components/TodoEntries.js';
import {Div} from 'atomize';

 function Dashboard(){
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);


    async function fetchApiData() {
        const todos = await axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                return response.data;
        });
        setTodoList(todos);
        setLoading(false);
    }

    useEffect(() => {
        fetchApiData();
    }, []);


        return(
            <Div className="container">
                <TodoEntries todoList = {todoList} loading={loading} setTodoList={setTodoList}/>
            </Div>
        );

}

export default Dashboard;