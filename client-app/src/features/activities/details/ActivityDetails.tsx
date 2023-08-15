import React from 'react';
import { Button, ButtonGroup, Card, Icon } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

  
interface  Props
{
    activity:Activity;
    cancelSelectActivity:() => void
    openForm:(id:string) => void;
}

  
export default function ActivityDtails({activity,cancelSelectActivity,openForm}:Props) {
    return (
        
            <Card fluid
            image={`./assets/categoryImages/${activity.category}.jpg`}
            header={activity.title}
            meta={activity.date}
            description={activity.description}
            extra={  <ButtonGroup widths='2'>
            <Button basic color='blue' 
            onClick={()=>openForm(activity.id)} content='Edit'></Button>
            <Button basic  onClick={cancelSelectActivity} color='grey' content='Cancel'></Button>
                </ButtonGroup>}
          />
        
    );
}