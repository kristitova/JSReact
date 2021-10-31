import { useCallback, useState, useEffect } from 'react';
import './App.css';
import { MessageList } from './components/MessageList';
import { Chats } from './components/Chats';
import { Box, createTheme, ThemeProvider, Paper, FormControlLabel, Switch, Container } from '@material-ui/core';



function App() {

  const [checkValue, setcheckValue] = useState(false);
  const [themeValue, setthemeValue] = useState(createTheme({
    palette: {
      type: "dark"
    }
  }));

  const handleChange = () => {
    if (!checkValue) {
      const themeValue = createTheme({
        palette: {
          type: "dark"
        }
      });
      setthemeValue(themeValue);
    } else {
      const themeValue = createTheme({
        palette: {
          type: "light"
        }
      });
      setthemeValue(themeValue);
    }
    setcheckValue(!checkValue);
  };

  useEffect(() => {
    const themeValue = createTheme({
      palette: {
        type: "light"
      }
    });
    setthemeValue(themeValue);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={themeValue}>
        <Container>
          <Paper sx={{ bgcolor: "background.paper" }} >
            <FormControlLabel
              control={
                <Switch
                  onChange={handleChange}
                  color="primary"
                />
              }
            />
            <Box sx={{ display: 'flex' }}>
              <Chats />
              <MessageList />
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>

  )
}

export default App;
