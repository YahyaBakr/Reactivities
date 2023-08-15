import React,{ChangeEvent,useState}  from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activity:Activity | undefined;
    closeForm:()=>void;
    createOrEdit:(activity:Activity)=>void;
}
export default function ActivityForm({activity:selectedActivity,closeForm,createOrEdit}:Props) {
    const initialState = selectedActivity?? {
        id:'',
        title:'',
        category:'',
        description:'',
        date:'',
        city:'',
        venue:''
    };
    const [activity,setActivity] = useState(initialState);
 
    function handelSubmit() {
        console.log(activity);
        createOrEdit(activity);
    }
    function handelInputChange(event:ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) {
        const {name,value}=event.target;
        setActivity({...activity,[name]:value});
    }
    return (
            <Segment clearing>
                <Form onSubmit={handelSubmit} autoComplete='off'>
                    <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handelInputChange}></Form.Input>
                    <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handelInputChange}></Form.TextArea>
                    <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handelInputChange}></Form.Input>
                    <Form.Input placeholder='Date' value={activity.date} name='date' onChange={handelInputChange}></Form.Input>
                    <Form.Input placeholder='City' value={activity.city} name='city' onChange={handelInputChange}></Form.Input>
                    <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handelInputChange}></Form.Input>
                    <Button floated='right'  positive onClick={()=>handelSubmit} type='submit' content='Submit'></Button>
                    <Button floated='right' onClick={closeForm} type='button' content='Cancel'></Button>
                </Form> 
            </Segment>
    );

}