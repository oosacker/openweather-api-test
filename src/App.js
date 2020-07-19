import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';

const App = () => {
  const [posts, setPost] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=wellington&appid=1dd2717b1abf4fe325703be72955b65d&units=metric");

    console.log(res);

    res
      .json()
      .then(res => {
        setPost(res);
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    console.log('useEffect');
    fetchData();

    // fetch('https://api.openweathermap.org/data/2.5/weather?q=wellington&appid=1dd2717b1abf4fe325703be72955b65d')
    //   .then(res => res.text())
    //   .then(text => console.log(text))  
    //   // .then(res => setPost(res))
    //   .catch(err => console.log(err))

  }, []);

  return (
    <div className="App">
      {/* <ul>{
          posts.map(post => 
            <li key={post.id}>
              {post.title}
            </li>)
        }</ul> */}
      <Container>

        <Row>
          {posts.name}
        </Row>

      </Container>

    </div>
  );
};

export default App;