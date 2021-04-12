import React, {Component} from 'react';
import {Div,Col,Row,Text,Checkbox, Label,Notification,Icon,Tag} from 'atomize';
import {DivContainer,TodoCard,TodoInput, UserSelectedText} from '../ui/CustomStyles.js';

class TodoEntries extends Component {

    state = {
        showTaskCompletedNotification: false,
        showTaskAddedNotification: false,
        input:'',
    }

    toggleTaskCompleted(id) {
       const todoList = this.props.todoList;
       let taskCompleted = false;
       const newTodoList = todoList.map(entry => {
         if (entry.id === id) {
           if(!entry.completed){
               taskCompleted = true;
           }
           return { ...entry, completed: !entry.completed}
         }
         return entry;
       });
       if(taskCompleted){
          this.setState({ showTaskCompletedNotification: true});
       }
       this.props.setTodoList(newTodoList);
    }

    handleChange = (e) => {
        this.setState({input: e.target.value});
     }

    handleNewEntry = (selectedUserId) => {
        const title = this.state.input;
        let newEntry = {
                        "userId": selectedUserId,
                        "id": Math.floor(Math.random()*selectedUserId),
                        "title": title,
                        "completed": false,
                      };
        const todoList = this.props.todoList;
        todoList.push(newEntry);
        const newTodoList = todoList;
        this.props.setTodoList(newTodoList);
        this.setState({ input: ''});
        this.setState({ showTaskAddedNotification: true});
    }

    render(){
        const loading = this.props.loading;
        let todoList = this.props.todoList;
        const selectedUserId = this.props.selectedUserId;
        if(selectedUserId !== ""){
            todoList = todoList.filter(task => task.userId === selectedUserId);
        }

        return(
            <>
                <DivContainer m={{ x: { sm: '', md: '1rem', lg:'8rem', xl:'15rem' }}}>
                    {loading && <Div>Loading Data...</Div>}
                    {!loading &&
                        <>
                            <Col>
                                 { selectedUserId !== "" &&
                                <Div p={{ xs: '0.5rem', md: '1rem' }}>
                                    <UserSelectedText textSize="F16" tag='h2'  p={{ xs: '0.5rem', md: '1rem' }}> User selected: {selectedUserId}</UserSelectedText>
                                    <TodoInput
                                      placeholder="Add task"
                                      onChange = {this.handleChange}
                                      value={this.state.input}
                                      suffix={
                                        <Icon
                                          name="Add"
                                          size="20px"
                                          cursor="pointer"
                                          onClick={() => this.handleNewEntry(selectedUserId)}
                                          pos="absolute"
                                          top="50%"
                                          right="1rem"
                                          transform="translateY(-50%)"
                                        />
                                      }
                                    />
                                </Div>
                                }
                                { todoList &&
                                todoList.sort((a, b) => a.completed ? 1 : -1)
                                .map((data,index) => {
                                    return(
                                    <TodoCard shadow='2'
                                      hoverShadow='4'
                                      transition key={index}>
                                        <Row d='flex' justify='space-between' align='center'>
                                                <Label>
                                                        <Checkbox
                                                            onChange={() => this.toggleTaskCompleted(data.id)}
                                                            checked={data.completed}
                                                            inactiveColor="success400"
                                                            activeColor="success700"
                                                            size="24px"
                                                            />
                                                        <Text w={{xs:"10rem", sm: '18rem', md: '30rem'}} style={{textAlign:"left", textDecoration: data.completed ? "line-through":""}}> {data.title}</Text>
                                                </Label>
                                                <Tag><Icon name="UserCircle" color="black" size="18px"/> {data.userId}</Tag>
                                        </Row>
                                    </TodoCard>
                                    )
                                })}
                            </Col>
                        </>
                    }
                </DivContainer>

                <Notification
                     bg="success700"
                     isOpen={this.state.showTaskCompletedNotification}
                     onClose={() => this.setState({ showTaskCompletedNotification: false })}
                     prefix={
                       <Icon
                         name="Success"
                         color="white"
                         size="16px"
                         m={{ r: "0.5rem" }}
                       />
                     }
                   >
                    Task Completed!
                </Notification>

                <Notification
                     bg="info700"
                     isOpen={this.state.showTaskAddedNotification}
                     onClose={() => this.setState({ showTaskAddedNotification: false })}
                     prefix={
                       <Icon
                         name="InfoSolid"
                         color="white"
                         size="18px"
                         m={{ r: "0.5rem" }}
                       />
                     }
                   >
                    Task Added and Assigned to User {selectedUserId}!
                </Notification>
            </>
         )
    }
}

export default TodoEntries;