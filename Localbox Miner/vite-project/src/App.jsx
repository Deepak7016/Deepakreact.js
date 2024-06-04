import React from 'react';
import ThemeContext from './Components/ThemeContext';
import { ThemeProvider } from './Components/ThemeContext'
import ThemeToggle from './Components/ThemeToogle';
import MyComponent from './Components/MyComponent';



const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <MyComponent />
    </ThemeProvider>
  );
};

export default App;
