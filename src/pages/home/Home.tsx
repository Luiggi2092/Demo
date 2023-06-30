import React from 'react';
import {useEffect} from "react";
import Card from '../../components/card/Card';
import {getPets} from '../../redux/actions'
import { useDispatch,useSelector } from 'react-redux';
import { PetsService } from '../../services/PetsService';

const Home: React.FC = () => {
  
  let Pets = useSelector((state:any)=>state.Pets);
  const dispatch = useDispatch();

  useEffect(()=>{
         (async function(){
          const response = await PetsService.getPets();
           dispatch(getPets(response.data));   
         })();
  },[]) 

  

  return (
    <div>
    <div className="home">
      <h1></h1>
      <div className="pet-card-container">
    
          <Card Pets={Pets}/>
       
      </div>
    </div>
    </div>
  );
};

export default Home;





