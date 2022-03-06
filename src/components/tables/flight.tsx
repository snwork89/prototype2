import React, { useState } from "react";
import FlightTableView from "./flightTableView";



import { overBooking } from "../types/overbooking";
import OverBookingPopup from "../Popup/OverBookingPopup";
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles({
  parentDiv: {
    marginTop:"50px",
    padding:10,
 
  },

});


const Flight = () => {
  const [responsive, setResponsive] = useState<string>("default");
  const [selectedFlightOverBooking, setSelectedFlightOverBooking] = useState<
    overBooking[] | []
  >([]);
  const classes = useStyles();
  return (
  
      <div>
        
        <OverBookingPopup
            selectedFlightOverBooking={selectedFlightOverBooking}
          />
      <div className={classes.parentDiv}>
     
     
            <FlightTableView
              setSelectedFlightOverBookingy={setSelectedFlightOverBooking}
              selectedFlightOverBooking={selectedFlightOverBooking}
            />
         
      </div>
          
        
      </div>

  );
};

export default Flight;
