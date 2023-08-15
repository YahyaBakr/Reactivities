import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { Container, Header,List, StrictDropdownDividerProps } from 'semantic-ui-react';
import { Activity } from '../models/activity';

import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid'
function App() {

  const [activites,setActivities]=useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]=useState<Activity|undefined>(undefined);
  const [editMode,setEditMode]=useState(false);

  useEffect(
    ()=>{
      axios.get<Activity[]>('http://localhost:5272/api/Activities').then(
        response=>{
          setActivities(response.data);
        }
      )
    },[] )

    function handelSelectedActivity(id :string) {
      setSelectedActivity(activites.find(x=>x.id===id))
    }
    function handelFormOpen(id? :string) {
      id ? handelSelectedActivity(id):handelCanceldActivity();
      setEditMode(true);
    }
    function handelFormClose(){
      setEditMode(false);
    }
    
    function handelCanceldActivity() {
      setSelectedActivity(undefined)
    }
    function handleDeleteActivity(id:String) {
      setActivities([...activites.filter(x=>x.id!==id)]);
    }
    function handleCreateOrEditActivity(activity:Activity) {
      activity.id ? setActivities([...activites.filter(x=>x.id!==activity.id),activity]) :setActivities([...activites,{...activity,id:uuid()}]);
      setEditMode(false)
      setSelectedActivity(activity)
    }
  return (
    <>
     <NavBar openForm={handelFormOpen}/>
     <Container style={{marginTop:'7em'}}>
      <ActivityDashboard 
      activites={activites}
      selectedActivity={selectedActivity}
      selectActivity={handelSelectedActivity}
      cancelSelectActivity={handelCanceldActivity}
      editMode={editMode}
      openForm={handelFormOpen}
      closeForm={handelFormClose}
      createOrEdit={handleCreateOrEditActivity}
      deleteActivity={handleDeleteActivity}
      ></ActivityDashboard>
     </Container>
  
    </>
  );
}

export default App;
