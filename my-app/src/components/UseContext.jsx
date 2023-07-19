
import React, { useState } from 'react';

const ThemeContext = React.createContext(null);

function UseContext(props) {
  const [theme, setTheme] = useState({
    current: 'light', // Set initial value for theme.current
    Dark: {
      background: 'black',
      foreground: 'white',
    },
    light: {
      background: 'white',
      foreground: 'black',
    },
  });

//   const data = useContext(ThemeContext) || {};

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      current: prevTheme.current === 'light' ? 'Dark' : 'light',
    }));
  };

  const themeStyle = theme[theme.current];

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2
              style={{
                backgroundColor: themeStyle.background || 'white',
                color: themeStyle.foreground || 'black',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h2>

            <button onClick={toggleTheme}>Toggle theme</button>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default UseContext;
