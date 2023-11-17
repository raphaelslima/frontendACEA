'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"

const Form = ()=> {
    return(
        <div className="max-w-5xl w-full bg-white p-4 rounded-md">
            <h1 className="text-center text-2xl">Adicione um item</h1>
            <form className="mt-4 flex flex-col justify-center items-center gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="itemName">Nome do item</Label>
                    <Input type="text" id="itemName" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="qtdItem">Quantidade do item</Label>
                    <Input type="number" id="qtdItem"/>
                </div>
                <Button className="bg-green-600 hover:scale-110 hover:bg-green-600">Adicionar</Button>
            </form>
        </div>
    )
}

export default Form