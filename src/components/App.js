import React, { Component } from 'react';
import './App.scss';
import Header from './common/Header';
import { Route } from 'react-router-dom';
import { MainPage, BasketPage } from 'pages';
import axios from 'axios';
import img from 'images/item.png';

class App extends Component {
  componentWillMount(){
    axios.get('dummy/goods.json')
      .then((obj) => {
        const goods = obj.data.goods.map((good) => {
          good = {...good, img}
          return good;
        })
        localStorage.shoppingData = JSON.stringify(goods);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Route exact path="/" component={MainPage}/>
        <Route path="/basket" component={BasketPage}/>
      </div>
    );
  }
}

export default App;
