import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <PostList />

      <Footer />

    </>
  )
}

export default App;