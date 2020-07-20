
import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';

require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY;

function App () {
  const [weatherData, setWeather] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=wellington&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setWeather(result);
          console.log(isLoaded);

        },
        error => {
          setIsLoaded(false);
          alert(error)
        }
      )
  }, [])


  if (!isLoaded) {
    console.log('Not loaded');
    return (
      <div>Loading...</div>
    )
  } 
  else {
    return (

      <>
        <Container>
          <Row>
            {/* {console.log(weatherData.weather[0])} */}

            {weatherData && (
              <div>
                <h3>{weatherData.name}</h3>
                <p>Temperature: {weatherData.main.temp} degC</p>
                <p>Feels like: {weatherData.main.feels_like} degC</p>
                {/* {console.log(weatherData.weather[0].main)} */}
                <p>{weatherData.weather[0].main}</p>
              </div>
            )}

          </Row>
        </Container>
      </>
    );
  };
};

export default App;