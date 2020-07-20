import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';

function App () {
  const [weatherData, setWeather] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  let loaded = false;

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=wellington&appid=1dd2717b1abf4fe325703be72955b65d&units=metric")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setWeather(result);
          console.log(isLoaded);
          loaded = true;
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