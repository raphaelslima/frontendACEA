"use client"

import TableItem from "../TableItem"
import { Item } from "@/types/item"
import { useContext, useEffect } from "react"
import { fetchItem } from "@/api/route"
import { ItemContext } from "@/context"

const Table = () => {
    const {items, setItem} = useContext(ItemContext)


    const getItem = async () => {
        const response = await fetchItem()
        setItem(response);
    }

    useEffect(()=>{
        getItem()
    },[])

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-s-lg text-center">
                            Nome
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Qtd
                        </th>
                        <th scope="col" className="px-6 py-3 rounded-e-lg text-center">
                            Deletar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item : Item) => (
                        <TableItem key={item._id} item={item} getItem={getItem}/>
                    ))}
                </tbody>
            </table>
</div>
    )
}

export default Table