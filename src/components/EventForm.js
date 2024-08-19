import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import '../pages/CalendarPage.css';

const EventForm = ({ existingEvent, onClose }) => {
  const { dispatch } = useContext(EventContext);

  const [title, setTitle] = useState(existingEvent ? existingEvent.title : '');
  const [date, setDate] = useState(existingEvent ? existingEvent.date : '');
  const [time, setTime] = useState(existingEvent ? existingEvent.time : '');
  const [category, setCategory] = useState(existingEvent ? existingEvent.category : '');
  const [description, setDescription] = useState(existingEvent ? existingEvent.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: existingEvent ? existingEvent.id : Date.now(),
      title,
      date,
      time,
      category,
      description,
    };

    if (existingEvent) {
      dispatch({ type: 'UPDATE_EVENT', payload: newEvent });
    } else {
      dispatch({ type: 'ADD_EVENT', payload: newEvent });
    }

    onClose();
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          // required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          // required
        >
          <option value="">Select Category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          // required
        />
      </div>
      <button className="interactive-button" type="submit">
        {existingEvent ? 'Save Changes' : 'Add Event'}
      </button>
      <button className="interactive-button cancel-button" type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};
export default EventForm;



