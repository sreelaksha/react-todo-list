import styled from 'styled-components';
import {Div,Input, Text} from 'atomize';

export const DivContainer = styled(Div)`
    text-align:center;
`

export const TodoInput = styled(Input)`
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
export const UserCard = styled(Div)`
    background-color:${props => props.bg ? props.bg : 'white'};
    padding:${props => props.p ? props.p : '1rem'};
    display:flex;
    flex-direction:${props => props.flexDir ? props.flexDir : 'column'};
    border: 0.5px;
    border-radius:2.5rem;
    margin-top:0.5rem;
`
export const DivHeader = styled(Div)`
    span{
        text-align:right;
    }
`
export const UserSelectedText = styled(Text)`
    color: ${props => props.theme.colors.successLight};
`