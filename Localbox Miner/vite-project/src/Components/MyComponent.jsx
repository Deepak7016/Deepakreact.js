import React, { useContext } from 'react';

const MyComponent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div style={styles}>
      This component's content will change color based on the theme.
    </div>
  );
};

export default MyComponent;
