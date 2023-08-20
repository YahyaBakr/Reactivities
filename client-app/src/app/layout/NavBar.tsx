import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { useStore } from '../stores/store';

 
export default function NavBar() {
    const {activityStore}=useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item header>
                <img src='assets/logo.png' alt='' style={{marginRight:'5px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activites'/>
            <Menu.Item>
                <Button positive  onClick={()=> activityStore.openForm()} content='Create Activity'></Button>
            </Menu.Item>
            </Container>
        </Menu>
    );
}
