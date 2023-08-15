import React from 'react'
import { Grid,List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityList from './ActivityList';
import ActivityDtails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface  Props
{
    activites:Activity[];
    selectedActivity:Activity |undefined;
    selectActivity:(id:string) => void;
    cancelSelectActivity:() => void;
    editMode : boolean;
    openForm:(id:string) => void;
    closeForm:() => void;
    createOrEdit:(activity:Activity)=>void;
    deleteActivity:(id:string) => void;

}

export default function ActivityDashboard({activites,selectedActivity,selectActivity,cancelSelectActivity,editMode,openForm,closeForm,createOrEdit,deleteActivity}:Props)
{
    
    return(
        <Grid>
            <Grid.Column width='10'>
           <ActivityList activites={activites} selectActivity={selectActivity} deleteActivity={deleteActivity} ></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDtails activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity} 
                openForm={openForm}
                ></ActivityDtails>}
                {
                    editMode && 
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}></ActivityForm>

                }
            </Grid.Column>
        </Grid>
    )
    
}