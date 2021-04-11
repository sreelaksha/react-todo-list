import React,{ useEffect,  useState }  from 'react';
import axios from 'axios';
import TodoEntries from '../components/TodoEntries.js';
import {Div} from 'atomize';
import Header from '../components/Header.js';

 function Dashboard(){
   const [todoList, setTodoList] = useState([]);
   const [userList, setUserList] = useState([]);
   const [loading, setLoading] = useState(true);
   const [selectedUserId, setSelectedUserId] = useState("");

   async function fetchApiData() {
       const todos = await axios.get('https://jsonplaceholder.typicode.com/todos')
           .then(response => {
               return response.data;
       });
       setTodoList(todos);
       const uniqueUsers = [];
       todos.map(todo => {
           if (uniqueUsers.indexOf(todo.userId) === -1) {
               uniqueUsers.push(todo.userId)
           }
       });
       setUserList(uniqueUsers);
       setLoading(false);
   }

    useEffect(() => {
        fetchApiData();
    }, []);


    return(
        <>
            <Header userList={userList} setSelectedUserId={setSelectedUserId}/>
            <Div className="container">
                <TodoEntries todoList = {todoList} selectedUserId={selectedUserId} loading={loading} setTodoList={setTodoList}/>
            </Div>
        </>
    );

}

export default Dashboard;