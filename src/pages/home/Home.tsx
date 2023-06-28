import React from 'react';
import Card from '../../components/card/Card';
import Navbar  from '../../components/navbar/Navbar';

const Home: React.FC = () => {
   
   

  

  return (
    <div>
      <Navbar/>
    <div className="home">
      <h1></h1>
      <div className="pet-card-container">
    
          <Card/>
       
      </div>
    </div>
    </div>
  );
};

export default Home;





