import {Text} from 'atomize';
import {DivHeader} from '../ui/CustomStyles.js';
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <DivHeader className='container' d='flex' justify='space-between' align='center' h='5rem'>
            <Link
                to={{
                pathname: '/'
              }}>
             <Text textSize="F24" tag="h1">TODO APP</Text>
            </Link>
            <Link
                to={{
                pathname: '/users'
              }}>
              Users
            </Link>
        </DivHeader>
    );
}

export default Header;