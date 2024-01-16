import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios';
import OrderList from './Pages/OrderList/OrderList';
import Failure from './Pages/Failure/Failure';
import { okStatus, serverUrl } from './Dec';
import './App.css';



function App() {

  const [categories, setCategories] = useState([]);
  
  const [selectedCategory, setSelectedCategory] = useState('')
  const newSelectedCategory = (newCat) => {
    setSelectedCategory(prevCat => newCat)
  }
  

    const fetchCategories = async () => {
        await axios.get(serverUrl)
        .then(res => {
            if (res.status === okStatus) {
              setCategories(res.data);
              newSelectedCategory(res.data[0]);
            };
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchCategories();
    }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='orderList' />} />
          <Route path='/orderList' element={
            <OrderList
              categories={categories}
              selectedCategory={selectedCategory}
              newSelectedCategory={newSelectedCategory}
            />
          }/>
          <Route path='*' element={<Failure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
