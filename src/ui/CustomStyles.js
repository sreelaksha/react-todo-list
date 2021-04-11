import styled from 'styled-components';
import {Div} from 'atomize';

export const DivContainer = styled(Div)`
    text-align:center;
    text-color:pink;
}
`
export const TodoCard = styled(Div)`
    background-color:${props => props.bg ? props.bg : 'white'};
    padding:${props => props.p ? props.p : '1rem'};
    display:flex;
    flex-direction:${props => props.flexDir ? props.flexDir : 'column'};
    border: 0.5px;
    border-radius:0.6rem;
    margin-top:0.5rem;
`

