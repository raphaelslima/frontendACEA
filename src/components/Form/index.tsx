'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import axios from "axios"
import { Item } from "@/types/item"
import {useForm} from 'react-hook-form'
import { useContext } from "react"
import { ItemContext } from "@/context"
import { fetchItem } from "@/api/route"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const postItem = async (data: {name: string, qtd: number}) => {
    const response = await axios.post<Item>(`http://localhost:8000/items`, data)

    return response.data
}

const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    qtd: yup.number().required("Campo obrigatório").min(1,"Valor precisa ser pelo menis 1")
})

const Form = ()=> {

    const {register, handleSubmit: onSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema), 
        defaultValues: {
        name: '',
        qtd: 1,
      }})
    const {setItem} = useContext(ItemContext)

    const handleSubmit = async (data: any) => {
        await postItem(data)
        const items = await fetchItem()
        setItem(items)
    }

    return(
        <div className="max-w-5xl w-full bg-white p-4 rounded-md">
            <h1 className="text-center text-2xl">Adicione um item</h1>
            <form onSubmit={onSubmit(handleSubmit)} className="mt-4 flex flex-col justify-center items-center gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="itemName" className="md:text-lg">Nome</Label>
                    <Input type="text" id="itemName" {...register('name')}/>
                    <span className="text-red-600">{errors.name?.message}</span>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="qtdItem" className="md:text-lg">Quantidade</Label>
                    <div className="flex flex-row justify-between items-center md:justify-start md:gap-4">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <Input type="number" id="qtdItem" className="w-full" {...register('qtd', {valueAsNumber: true})}/>
                            {errors.qtd?.message && <span className="text-red-600">{errors.qtd?.message}</span>}
                        </div>
                        <Button type="submit" className="bg-green-600 md:text-lg hover:scale-110 hover:bg-green-600">Adicionar</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form