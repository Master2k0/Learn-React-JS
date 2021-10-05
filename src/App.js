import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import Hero from './features/Hero/index';
import Homepage from './Page/Homepage';
App.propTypes = {
  
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>React Hook</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Easy Frontend"/>
      <Homepage/>
      <p>Haha</p>
    </div>
  );
}

export default App;