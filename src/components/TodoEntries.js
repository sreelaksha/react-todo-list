import React from 'react';
import {Div,Col,Row,Text} from 'atomize';

const TodoEntries = (props) => {
    const allData = props.data;
    console.log(allData);
        return(
             <Row>
                   { allData && allData.map((data,index) => {
                    return(
                      <Col key={index}>
                        <Text>{data.title}</Text>
                      </Col>
                      )
                   })}
             </Row>
        )
    }

export default TodoEntries;