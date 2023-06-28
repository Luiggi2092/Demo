import React, { useState } from "react";
import {items} from "../../data/index"
import CardsShop from "../../components/CardsShop/CardsShop";
import style from "./PetShop.module.css"
import { useSelector } from "react-redux";
import Paginado from "../../components/Paginado/Paginado";
import { Product } from '../../redux/types';
import Navbar from "../../components/navbar/Navbar";



const PetShop: React.FC = () => {
  
   const numPage = useSelector((state:any)=>state.numPage);
   const [pagina,setPagina] = useState<number>(numPage);
   const [porPagina] = useState<number>(9);
   const lastIndex= pagina * porPagina //10
    const firstIndex= lastIndex - porPagina
   const [maxPageNumberLimit,setMaxpageNumberLimit] = useState(5);
   const [minPageNumberLimit,setMinPageNumberLimit] = useState(0);
   const SearchName = useSelector((state:any)=>state.name);
   const Fill = useSelector((state:any)=> state.Fill);
   let products = useSelector((state:any)=> state.products);
   const FillName = products.filter((products:Product)=> products.nombre.toLowerCase().includes(SearchName.toLowerCase())) 
   let maximoFiltro = FillName.length;  
   

   const maximo = items.length;
 


  



  return (

    <div>
      <Navbar setPagina={setPagina}/>
      <h1 className={style.titulo}>Pets Shop</h1>   
      <div className={style.container}>
        <CardsShop firstIndex={firstIndex} lastIndex={lastIndex}  />
      </div>
      <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} 
      maximoFiltro={maximoFiltro}
      maxPageNumberLimit={maxPageNumberLimit}
      setMaxpageNumberLimit={setMaxpageNumberLimit}
      minPageNumberLimit={minPageNumberLimit}
      porPagina={porPagina}
      setMinPageNumberLimit={setMinPageNumberLimit}
      Fill={Fill}
      />
    </div>

  )

}

export default PetShop;