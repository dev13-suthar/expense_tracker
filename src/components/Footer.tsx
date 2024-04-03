import { DataUsageRounded, Home} from "@mui/icons-material"
import { IconButton } from "@mui/material"
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const naviate = useNavigate();

    const NavigateTo = (to:string)=>{
        naviate(`/home/${to}`)
    }
  return (
    <>
    <div className="h-12 p-2 flex gap-2 bg-slate-400 justify-between items-center fixed left-0 bottom-1 w-full">
        <IconButton onClick={()=>NavigateTo("transactions")}>
            <ReceiptLongIcon/>
        </IconButton>
        <IconButton onClick={()=>NavigateTo("Add")} >
            <span>&darr;</span>
        </IconButton>
        <IconButton onClick={()=>NavigateTo("statistics")}>
            <DataUsageRounded/>
        </IconButton>
        <IconButton onClick={()=>NavigateTo("Spend")}>
            <span>&uarr;</span>
        </IconButton>
        <IconButton onClick={()=>NavigateTo("")}>
            <Home />
        </IconButton>

    </div>
    </>
  )
}

export default Footer
