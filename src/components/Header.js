import {Div, Text} from 'atomize';
import {DivHeader} from '../ui/CustomStyles.js';

function Header(){
    return(
        <DivHeader className='container' d='flex' justify='space-between' align='center' h='5rem'
            >
            <Text textSize="F24" tag="h1">TODO APP</Text>
            <span>Users</span>
        </DivHeader>
    );
}


export default Header;