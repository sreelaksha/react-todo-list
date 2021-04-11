import React, {Component} from 'react';
import {Div,Col,Row,Text,Checkbox, Label,Notification,Icon,Tag} from 'atomize';
import {DivContainer,TodoCard,TodoInput} from '../ui/CustomStyles.js';

class TodoEntries extends Component {

    state = {
        showTaskCompletedNotification: false,
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

    render(){
        const loading = this.props.loading;
        let todoList = this.props.todoList;
        const selectedUserId = this.props.selectedUserId;

        if(selectedUserId !== ""){
            todoList = todoList.filter(task => task.userId === selectedUserId);
        }

        return(
            <>
                <DivContainer m={{ x: { xs: '', md: '1rem', lg:'15rem' }}}>
                    {loading && <Div>Loading Data...</Div>}
                    {!loading &&
                        <>
                            <Col>
                                <Div p={{ xs: '1rem', md: '2rem' }}>
                                    <TodoInput
                                      placeholder="Add task"
                                      suffix={
                                        <Icon
                                          name="Add"
                                          size="20px"
                                          cursor="pointer"
                                          onClick={() => console.log("clicked")}
                                          pos="absolute"
                                          top="50%"
                                          right="1rem"
                                          transform="translateY(-50%)"
                                        />
                                      }
                                    />
                                </Div>
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
                                                        <Text style={{ textDecoration: data.completed ? "line-through":""}}> {data.title}</Text>
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
            </>
         )
    }
}

export default TodoEntries;