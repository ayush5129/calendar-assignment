import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import EventModal from '../components/EventModal';
import EventForm from '../components/EventForm';
import './CalendarPage.css'; 

const EventDetailPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(EventContext);
  const navigate = useNavigate();
  const event = state.events.find((e) => e.id === Number(id));

  const [isEditing, setEditing] = useState(false);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_EVENT', payload: event.id });
    navigate('/');
  };

  return (
    <div className="page-container">
      <div className="event-container">
        {event ? (
          <>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Category: {event.category}</p>
            <p>Description: {event.description}</p>
            <button className="interactive-button" onClick={() => setEditing(true)}>Edit</button>
            <button className="interactive-button delete-button" onClick={handleDelete}>Delete</button>
          </>
        ) : (
          <p>Event not found</p>
        )}
      </div>

      {isEditing && (
        <EventModal onClose={() => setEditing(false)}>
          <EventForm existingEvent={event} onClose={() => setEditing(false)} />
        </EventModal>
      )}
    </div>
  );
};

export default EventDetailPage;
