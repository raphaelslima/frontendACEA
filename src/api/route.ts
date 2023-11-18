import { Item } from "@/types/item"
import axios from "axios"

export const fetchItem = async () => {
    const response = await axios.get<Item[]>(`http://localhost:8000/items`)
    return response.data
}
