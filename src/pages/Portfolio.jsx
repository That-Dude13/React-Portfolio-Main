import React from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import NavTabs from '../components/NavTabs';

const Portfolio = () => {
const [currentPage, setCurrentPage] = useState('Portfolio');

return (
  <div>
    <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />

<main>

<a href="https://byte-bridge-044c48f5039e.herokuapp.com/" >
  <h1>Portfolio</h1>
</a>
<h1>Byte-Bridge</h1>
<a href img = "./components/images/byte-bridge.jpg" alt="byte-bridge">
</a>

</main>
</div>
);

};


export default Portfolio;