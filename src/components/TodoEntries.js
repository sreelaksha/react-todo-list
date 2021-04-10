import React, {Component} from 'react';
import {Div,Col,Row,Text,Checkbox, Label} from 'atomize';

class TodoEntries extends Component {

    toggleTaskCompleted(id) {
       const todoList = this.props.todoList;
       const newTodoList = todoList.map(entry => {
         if (entry.id === id) {
           return { ...entry, completed: !entry.completed}
         }
         return entry;
       });
       this.props.setTodoList(newTodoList);
     }

    render(){
        const loading = this.props.loading;
        const todoList = this.props.todoList;

        return(
            <Div className="container">
                {loading && <Div>Loading Data...</Div>}
                {!loading &&
                    <Col>
                        { todoList && todoList.map((data,index) => {
                            return(
                                <Row key={index}>
                                    <Label>
                                            <Checkbox
                                                onChange={() => this.toggleTaskCompleted(data.id)}
                                                checked={data.completed}
                                                inactiveColor="success400"
                                                activeColor="success700"
                                                size="24px"
                                                />
                                                    <Text>{data.title}</Text>
                                    </Label>
                                </Row>
                            )
                        })}
                    </Col>
                }
            </Div>
         )
    }
}

export default TodoEntries;