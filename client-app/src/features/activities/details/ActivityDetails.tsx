import React, { useEffect } from 'react';
import { Button, ButtonGroup, Card, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';

  
 

  
export default observer(function ActivityDtails() {
    const{activityStore}=useStore();
    const{selectedActivity:activity,loadActivity,loadingInitial}=activityStore;
    const {id}=useParams();
    useEffect(()=>{
        if (id) {
            loadActivity(id);
        }
    },[id,loadActivity])
    if (loadingInitial || !activity) return <LoadingComponent/>;
    return (
        
            <Card fluid
            image={`/assets/categoryImages/${activity.category}.jpg`}
            header={activity.title}
            meta={activity.date}
            description={activity.description}
            extra={  <ButtonGroup widths='2'>
            <Button basic as={Link} to={`/manage/${activity.id}`}  color='blue'  content='Edit'></Button>
            <Button basic as={Link} to='/activities' color='grey' content='Cancel'></Button>
                </ButtonGroup>}
          />
        
    );
})