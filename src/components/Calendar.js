import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
import '../pages/CalendarPage.css'

const CalendarComponent = () => {

  const { state } = useContext(EventContext);
  const navigate = useNavigate();

  const tileContent = ({ date }) => {
    const dayEvents = state.events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    return dayEvents.map((event) => (
      <div key={event.id} onClick={() => navigate(`/event/${event.id}`)}>
        {event.title}
      </div>
    ));
  };

  return (
      <Calendar tileContent={tileContent} />
  );
};

export default CalendarComponent;
