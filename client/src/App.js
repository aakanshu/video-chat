import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import io from 'socket.io-client';
import Home from './Components/Home';
import Room from './Components/Room';

const socket = io('http://localhost:3000');
socket.on('availableRooms', (data) => {
  console.log(data);
  // socket.emit('offer', { my: 'data' });
});

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/r/:id" component={Room} />
          {/* Page not found so redirect to howe page */}
          <Route path="*"><Redirect to="/" /></Route> 
        </Switch>
      </Router>
    );
  }
}

export default App;
