import IconTrash from "@/icons/IconTrash"
import BtnIncOrDec from "../BtnIncOrDec"
import { Button } from "../ui/button"

const Table = ()=> {
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
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap text-center font-bold">
                            Canetas
                        </th>
                        <td className="py-4 w-full flex flex-row justify-center items-center gap-2">
                            <BtnIncOrDec inc={false}/>
                            <span className="text-lg">1</span>
                            <BtnIncOrDec inc={true}/>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <Button variant="destructive"><IconTrash fontSize={18}/></Button>
                        </td>
                    </tr>
                    
                </tbody>
                <tfoot>
                    <tr className="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-3"></td>
                        <td className="px-6 py-3 text-center">3</td>
                    </tr>
                </tfoot>
            </table>
</div>
    )
}

export default Table