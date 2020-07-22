
import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';

require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY;

function App () {
  const [weatherData, setWeather] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState('city');
  const [isError, setError] = useState(false);

  // console.log(process.env.REACT_APP_API_KEY);

  // useEffect(() => {
    // console.log('useEffect')
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       setIsLoaded(true);
    //       setWeather(result);
    //       console.log(isLoaded);

    //     },
    //     error => {
    //       setIsLoaded(false);
    //       alert(error)
    //     }
    //   )
  // }, [])

  useEffect(() => {
    // console.log('useEffect')
    // setIsLoaded(false);
    // setError(false);
  })

  function getData() {
    console.log('getData: '+city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setWeather(result);
          // console.log(isLoaded);
          console.log(result);
        },
        error => {
          setIsLoaded(false);
          alert(error)
        }
      )
      .catch (error => {
        setIsLoaded(false);
        setError(true);
        alert(error);
      })
  }

  const handleChange = (event) => {
    // setInput(event.target.value);
    // console.log(event.target.value);
    // console.log(event);
    setCity(event.target.value.toLowerCase());
  }

  const handleSubmit = (event) => {
    
    getData();
    event.preventDefault();
  }

  if (isError) {
    console.log('Error');
    return (
      <div>Error!</div>
    )
  } 
  // else if(!isLoaded){
  //   console.log('Loading');
  //   return (
  //     <div>Loading, please wait</div>
  //   )
  // }
  else {
    return (

      <>
        <Container>
          <Row>
            <form onSubmit={handleSubmit}>
              <label htmlFor='city_input'>Enter city: </label>
              <input id='city_input' type='input'  name='city' onChange={handleChange}/>
              <input type="submit" value="Submit" />
              {/* <button onClick={handleSubmit}>Submit</button> */}
            </form>
          </Row>

          <Row>
            <h3>{city.toUpperCase()}</h3>
          </Row>

          <Row>
            {/* {console.log(weatherData.weather[0])} */}

            {weatherData && (
              <div>
                {/* <h3>{weatherData.name}</h3> */}
                <p>Temperature: {weatherData.main.temp} degC</p>
                <p>Feels like: {weatherData.main.feels_like} degC</p>
                <p>Humidity: {weatherData.main.humidity} %</p>
                <p>{weatherData.weather[0].main +' - '+ weatherData.weather[0].description} </p>
                {/* <p>{weatherData.weather[0].description}</p> */}
              </div>
            )}

          </Row>
        </Container>
      </>
    );
  };
};

export default App;