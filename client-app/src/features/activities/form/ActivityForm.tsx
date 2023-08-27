import React,{ChangeEvent,useEffect,useState}  from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
 import { v4 as uuid } from 'uuid';
export default  observer( function ActivityForm() {
   const {activityStore}=useStore();
   const {selectedActivity,createActivity,updateActivity,
    loading,loadActivity,loadingInitial}=activityStore;
   
   const {id}=useParams();
   const navigate=useNavigate();
   const [activity,setActivity]=useState<Activity>({
    id:'',
    title:'',
    category:'',
    description:'',
    date:'',
    city:'',
    venue:''
   });
    useEffect(()=>{
        if(id) loadActivity(id).then(activity=>setActivity(activity!))
    },[id,loadActivity])
    function handelSubmit() {
        if (!activity.id)
        {
            activity.id=uuid();
            createActivity(activity).then(()=>navigate(`/activities/${activity.id}`));
        }else{
            updateActivity(activity).then(()=>navigate(`/activities/${activity.id}`));
        }
    }
    function handelInputChange(event:ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) {
        const {name,value}=event.target;
        setActivity({...activity,[name]:value});
    }
    if(loadingInitial) return <LoadingComponent content='Loading activity...'/>
    return (
            <Segment clearing>
                <Form onSubmit={handelSubmit} autoComplete='off'>
                    <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handelInputChange}></Form.Input>
                    <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handelInputChange}></Form.TextArea>
                    <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handelInputChange}></Form.Input>
                    <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handelInputChange}></Form.Input>
                    <Form.Input placeholder='City' value={activity.city} name='city' onChange={handelInputChange}></Form.Input>
                    <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handelInputChange}></Form.Input>
                    <Button loading={loading} floated='right'  positive onClick={()=>handelSubmit} type='submit' content='Submit'></Button>
                    <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'></Button>
                </Form> 
            </Segment>
    );

})