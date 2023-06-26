import {items} from "../../data/index"
import  CardShop from '../CardShop/CardShop';
import style from './cards.module.css'

interface Props {
    firstIndex:number;
    lastIndex:number;
 
 }


const Cards: React.FC<Props> = ({lastIndex,firstIndex}) => {

    return (
        <div className={style.container}>
            {items?.map((item, index) => (
                <CardShop key={index} {...item} />
            )).slice(firstIndex,lastIndex)}
        </div>
    )

}


export default Cards