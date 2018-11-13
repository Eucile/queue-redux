import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route exact path='/newTicket' component={NewTicketControl} />
      </Switch>
    </div>
  );
}

export default App;
