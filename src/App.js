import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import CalendarPage from './pages/CalendarPage';
import EventDetailPage from './pages/EventDetailPage';

const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;


