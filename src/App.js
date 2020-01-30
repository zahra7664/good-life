import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './routes/Home'
import Item from './routes/Item'
import Categories from './routes/Categories'
import Category from './routes/Category'
import About from './routes/About'
import Header from './ui-kit/Header';
import Footer from './ui-kit/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/items/:id" children={<Item />} />
          <Route path="/categories/:id" children={<Category />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
