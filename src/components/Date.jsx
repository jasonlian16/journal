import React from "react";
import { format } from "date-fns";

// Date component to display a formatted date
export const CurrentDate = () =>{
    const today = new Date();

    // Gets the user's locale date 
    const formatDate = format(today, 'EEEE, MMMM d');

    return(
        <h1>{formatDate}</h1>
    );
}