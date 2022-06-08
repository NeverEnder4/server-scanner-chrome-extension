import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = React.createContext();

export function NavigationProvider({ children }) {
  const [view, setView] = useState(null);

  // useMemo implemented to avoid inlining an object as Provider value which causes
  // unchecked re-renders of Provider
  const value = useMemo(() => ({ view, setView }), [view]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

NavigationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
