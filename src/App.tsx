import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Header } from './components/Header/Index';
import { Co } from './pages/Co';
import { Conversations } from './pages/Conversations';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Ownership } from './pages/Ownership';

function App() {
  return (
    <>
      <Header/>
      <Routes/>
    </>
  );
}

export default App;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/co" component={Co} />
      <Route path="/conversations" component={Conversations} />
      <Route path="/ownership" component={Ownership} />
      <Route render={() => "404 page not found !"} />
    </Switch>
  );
};