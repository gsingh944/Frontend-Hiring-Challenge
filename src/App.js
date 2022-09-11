import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/Tabs';
import Header from './Header';
import Calls from './containers/Calls.js';
import "./css/app.css"


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Tabs />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
