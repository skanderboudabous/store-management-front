import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Medicaments';
import Category from './pages/Categories';
import AddMedicament from "./pages/AddMedicament";
import AddCategory from "./pages/AddCategory";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/medicaments' component={Products} />
          <Route path='/category' component={Category} />
          <Route path='/addMedicament' component={AddMedicament} />
          <Route path='/addCategory' component={AddCategory} />
        </Switch>
      </Router>
    </>
  );
}

export default App;