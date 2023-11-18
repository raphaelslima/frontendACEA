'use client'

import IconTrash from "@/icons/IconTrash"
import BtnIncOrDec from "../BtnIncOrDec"
import { Button } from "../ui/button"
import { Item } from "@/types/item"
import axios from "axios"


type Props = {
    item: Item
    getItem: () => void
}


const TableItem = ({item, getItem}: Props) => {

    const handleDelete = async (id: string) => {
        await axios.delete(`http://localhost:8000/items/${id}`)
        getItem()
    }

    return(
        <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap text-center font-bold">
                {item.name}
            </th>
            <td className="py-4 w-full flex flex-row justify-center items-center gap-2">
                <BtnIncOrDec inc={false}  item={item}  getItem={ getItem}/>
                <span className="text-lg">{item.qtd}</span>
                <BtnIncOrDec inc={true} item={item}  getItem={ getItem}/>
            </td>
            <td className="px-6 py-4 text-center">
                <Button variant="destructive" onClick={() => handleDelete(item._id)}><IconTrash fontSize={18}/></Button>
            </td>
        </tr>
    )
}

export default TableItem