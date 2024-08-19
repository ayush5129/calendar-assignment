import React, { useReducer, useEffect } from 'react';

const initialState = {
  events: JSON.parse(localStorage.getItem('events')) || [], 
};

export const EventContext = React.createContext(initialState);

const eventReducer = (state, action) => {
  let updatedEvents;
  switch (action.type) {
    case 'ADD_EVENT':
      updatedEvents = [...state.events, action.payload];
      break;
    case 'UPDATE_EVENT':
      updatedEvents = state.events.map(event =>
        event.id === action.payload.id ? action.payload : event
      );
      break;
    case 'DELETE_EVENT':
      updatedEvents = state.events.filter(event => event.id !== action.payload);
      break;
    default:
      return state;
  }
  localStorage.setItem('events', JSON.stringify(updatedEvents));
  return {
    ...state,
    events: updatedEvents,
  };
};

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      dispatch({ type: 'LOAD_EVENTS', payload: storedEvents });
    }
  }, []);

  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};
