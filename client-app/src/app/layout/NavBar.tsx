import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface Props{
    openForm:()=>void;
}
export default function NavBar({openForm}:Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item header>
                <img src='assets/logo.png' alt='' style={{marginRight:'5px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activites'/>
            <Menu.Item>
                <Button positive  onClick={openForm} content='Create Activity'></Button>
            </Menu.Item>
            </Container>
        </Menu>
    );
}
