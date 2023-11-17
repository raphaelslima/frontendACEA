import IconAdd from "@/icons/IconAdd"
import { Button } from "../ui/button"
import IconSubtractLine from "@/icons/IconSubtractLine"

type Props = {
    inc: boolean
}

const BtnIncOrDec = ({inc}: Props) => {
    return(
        <div>
            {inc ? 
                <Button className="text-white bg-slate-700"><span>+</span></Button> 
                    : 
                <Button className="text-white bg-slate-700"><span>-</span></Button>}
        </div>
        
    )
}

export default BtnIncOrDec