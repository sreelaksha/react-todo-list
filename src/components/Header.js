import {Text} from 'atomize';
import {DivHeader} from '../ui/CustomStyles.js';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props){
    const userList = props.userList;
    return(
        <DivHeader className='container' d='flex' justify='space-between' align='center' h='5rem'>
            <Text textSize="F24" tag="h1">TODO APP</Text>
            <DropdownButton id="dropdown-basic-button" title="Select User">
                  <Dropdown.Item onClick={() => props.setSelectedUserId("")} >NONE</Dropdown.Item>
                     { userList &&
                            userList.map((data,index) => {
                                 return( <Dropdown.Item onClick={() => props.setSelectedUserId(data)}  key={index}>{data}</Dropdown.Item>);
                             })
                     }
                     { !userList &&
                           <Dropdown.Item>Loading...</Dropdown.Item>
                     }
            </DropdownButton>
        </DivHeader>
    );
}

export default Header;