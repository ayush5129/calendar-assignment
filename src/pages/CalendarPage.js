import React, { useState } from 'react';
import CalendarComponent from '../components/Calendar';
import EventModal from '../components/EventModal';
import EventForm from '../components/EventForm';
import './CalendarPage.css';

const CalendarPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="page-container">
      <CalendarComponent />
      <button className="add-button" onClick={() => setModalOpen(true)}>+</button>
      {isModalOpen && (
        <EventModal onClose={() => setModalOpen(false)}>
          <EventForm onClose={() => setModalOpen(false)} />
        </EventModal>
      )}
    </div>
  );
};

export default CalendarPage;
