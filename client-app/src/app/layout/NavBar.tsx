import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { useStore } from '../stores/store';
import { NavLink } from 'react-router-dom';

 
export default function NavBar() {
    const {activityStore}=useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item  as={NavLink} to='/' header>
                <img src='assets/logo.png' alt='' style={{marginRight:'5px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item as={NavLink} to='/activities' name='Activites'/>
            <Menu.Item>
                <Button as={NavLink} to='/createActivity' positive    content='Create Activity'></Button>
            </Menu.Item>
            </Container>
        </Menu>
    );
}
