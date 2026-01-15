import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Calendar component to display a calendar and manage date state
export const CalendarComponent = () =>{
    const [date, setDate] = useState(new Date());
    return(
        <div>
            <Calendar onChange={setDate} value={date}/>
        </div>
    );
}