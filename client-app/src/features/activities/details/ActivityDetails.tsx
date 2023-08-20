import React from 'react';
import { Button, ButtonGroup, Card, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';

  
 

  
export default function ActivityDtails() {
    const{activityStore}=useStore();
    const{selectedActivity:activity,openForm,cancelSelectedActivity}=activityStore;

    if (!activity) return <LoadingComponent/>;

    return (
        
            <Card fluid
            image={`./assets/categoryImages/${activity.category}.jpg`}
            header={activity.title}
            meta={activity.date}
            description={activity.description}
            extra={  <ButtonGroup widths='2'>
            <Button basic color='blue' 
            onClick={()=>openForm(activity.id)} content='Edit'></Button>
            <Button basic  onClick={cancelSelectedActivity} color='grey' content='Cancel'></Button>
                </ButtonGroup>}
          />
        
    );
}