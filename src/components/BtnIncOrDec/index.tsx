import { Item } from "@/types/item"
import { Button } from "../ui/button"
import axios from "axios"

type Props = {
    inc: boolean
    item: Item
    getItem: ()=> void
}

const BtnIncOrDec = ({inc, item, getItem}: Props) => {

    const handleUpdateQtd = async (isAdd: boolean, item: Item) =>{
        if(isAdd){
    
            const newQtd = item.qtd + 1
            const data = {
                name: item.name,
                qtd: newQtd
            };
    
            await axios.put(`http://localhost:8000/items/${item._id}`,data)
            getItem()
            
        } else{
            if(item.qtd === 1) return
    
            const newQtd = item.qtd - 1
            const data = {
                name: item.name,
                qtd: newQtd
            };
    
            await axios.put(`http://localhost:8000/items/${item._id}`,data)
            getItem()
          
        }
    }

    return(
        <div>
            {inc ? 
                <Button className="text-white bg-slate-700" onClick={() => handleUpdateQtd(true, item)}><span>+</span></Button> 
                    : 
                <Button className="text-white bg-slate-700" onClick={() => handleUpdateQtd(false, item)}><span>-</span></Button>}
        </div>
        
    )
}

export default BtnIncOrDec