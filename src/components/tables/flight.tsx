import React, { useState } from "react";
import FlightTableView from "./flightTableView";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FlightListView from "./flightListView";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

  const handleChange = (event: SelectChangeEvent) => {
    setResponsive(event.target.value as string);
  };
  const classes = useStyles();
  return (
  
      <div>
      
      
      
        <OverBookingPopup
            selectedFlightOverBooking={selectedFlightOverBooking}
          />
      <div className={classes.parentDiv}>
      <FormControl>
          <InputLabel id="demo-simple-select-label">Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={responsive}
            label="Mode"
            style={{ minWidth: 120 }}
            onChange={handleChange}
          >
            <MenuItem value={"default"}>Default</MenuItem>
            <MenuItem value={"responsive"}>Responsive</MenuItem>
          </Select>
        </FormControl>
     
            
          {responsive === "responsive" ? (
            <FlightListView
            setSelectedFlightOverBookingy={setSelectedFlightOverBooking}
              selectedFlightOverBooking={selectedFlightOverBooking}
              
            />
          ) : (
            <FlightTableView
              setSelectedFlightOverBookingy={setSelectedFlightOverBooking}
              selectedFlightOverBooking={selectedFlightOverBooking}
            />
          )}
         
      </div>
          
        
      </div>

  );
};

export default Flight;
