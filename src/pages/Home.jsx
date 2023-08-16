import React from 'react';
import {useState} from 'react';
import Navigation from '../components/Navigation';
import NavTabs from '../components/NavTabs';
import App from '../components/Footer';


const Home = () => {
  const [currentPage, setCurrentPage] = useState('Home');


  return (
    <div>
     
      <main>{<Home> </Home>}</main>
    </div>
  );
};

export default App;
