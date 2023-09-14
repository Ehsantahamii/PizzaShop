import React from 'react'
import {useEffect} from "react";
import AOS from "aos";

// import { Lazy , Suspense } from 'react'
import Header from './components/Header'
import PopularDishes from './components/PopularDishes'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import SendReview from './components/SendReview'
import Footer from './components/Footer';
import './App.css'

function App() {

  useEffect(() => {
    AOS.init({
        duration:1200,
        easing: 'ease-in-out',
    });
    AOS.refresh();

  }, [])

  return (
    <main className="App bg-zinc-200 bg-opacity-40">
      <Header />
      <PopularDishes />
      <AboutUs />
      <Menu />
      <Reviews />
      <SendReview />
      <Footer />
    </main>
  )
}

export default App;
