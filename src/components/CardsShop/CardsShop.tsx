import { useSelector } from "react-redux";
import {items} from "../../data/index"
import  CardShop from '../CardShop/CardShop';
import style from './cards.module.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getProductos} from "../../redux/actions"
import { Product } from '../../redux/types';

interface Props {
    firstIndex:number;
    lastIndex:number;
 
 }


const Cards: React.FC<Props> = ({lastIndex,firstIndex}) => {


    let products = useSelector((state:any)=> state.products);
    const SearchName = useSelector((state:any)=>state.name);
    const dispatch = useDispatch();
    const FillName = products.filter((products:Product)=> products.nombre.toLowerCase().includes(SearchName.toLowerCase())) 
    const Fill = useSelector((state:any)=> state.Fill);

    if(Fill){
        products = FillName; 
    }else{
        products; 
    }
  

    useEffect(()=>{
         dispatch(getProductos(items)); 
    },[])



    return (
        <div className={style.container}>
            {products?.map((products:Product) => (
                <CardShop key={products.id} {...products} />
            )).slice(firstIndex,lastIndex)}
        </div>
    )

}


export default Cards