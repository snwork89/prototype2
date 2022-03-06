import React , {Dispatch, SetStateAction,useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import OverBookingTab from './OverBookingTab';
import {Paper} from '@mui/material';
import {overBooking} from '../types/overbooking';
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles({
  parentDiv: {
    marginBottom:"50px",
    padding:10,
 
   
  },

});


interface OverBookingProps {
    
    selectedFlightOverBooking: overBooking[] | [],

}

export default function OverBookingPopup (props: OverBookingProps) {

    const [currentTab, setcurrentTab] = useState<Number>(0);

    const classes=  useStyles();
    const handleCurrentTabChange =  (event: React.SyntheticEvent, newValue: number) => {
        setcurrentTab(newValue);
      };

    const renderTabContent = ()=>{
        if(currentTab==0){
           return (
            
               <OverBookingTab selectedFlightOverBooking={props.selectedFlightOverBooking}/>
           
               
           )
        }
    }
  return (
  
    <div className={classes.parentDiv}>    
     <Tabs value={currentTab} onChange={handleCurrentTabChange}>
         <Tab label="OverBooking" />
        


         
     </Tabs>
     {renderTabContent()}
</div>

  );
}
