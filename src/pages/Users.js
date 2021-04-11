import React, {useEffect,  useState} from 'react';
import {Div,Row,Text} from 'atomize';
import {DivContainer,UserCard} from '../ui/CustomStyles.js';
import Header from '../components/Header.js';
import axios from 'axios';

function Users(){
    const [todoList, setTodoList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

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

    function getRandomColor(){
        var colors = ["#F5DEB3","#FA8072","#20B2AA","#E6E6FA","#87CEEB","#D3D3D3","#FFE4E1"];
        var randomColor = colors[Math.floor(Math.random()*colors.length)];
        return randomColor;
    }

    useEffect(() => {
        fetchApiData();
    }, []);

    return(
        <>
            <Header/>
            <DivContainer className="container">
                    {loading && <Div>Loading Users...</Div>}
                    {!loading &&
                        <>
                        <Text textSize="F24"  tag="h1"  p={{ xs: '2rem', md: '2rem' }}> Users List</Text>
                        <Row justify="space-around" >
                            {userList &&
                            userList.map((data,index) => {
                                return(
                                    <UserCard shadow='2'
                                      hoverShadow='4'
                                      transition key={index}
                                      style={{backgroundColor:getRandomColor()}}
                                      p={{ xs: '2rem', md: '4rem' }}
                                      m={{xs: '0.5rem', md: '1rem'}}>
                                            <Text> User : {data}</Text>
                                    </UserCard>
                                )
                            })
                            }
                        </Row>
                        </>
                    }
            </DivContainer>
        </>
    );
}

export default Users;