import { useCallback, useState, useEffect } from 'react';
import './App.css';
import { Box, createTheme, ThemeProvider, Paper, Container, FormControlLabel, Switch } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from './routes/Routes';
import { Layout } from './components/Layout';
import { Header } from './components/Header';


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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <ThemeProvider theme={themeValue}>
              <Container>
                <Paper sx={{ bgcolor: "background.paper" }} >
                  <Header />
                  <Layout>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                    />
                    <Routes />
                  </Layout>
                </Paper>
              </Container>
            </ThemeProvider>
          </div>
        </BrowserRouter >
      </PersistGate>
    </Provider >


  )
}

export default App;
