import {useSelector } from "react-redux";
import { UserType } from "../state";
import { RootState } from "../state/rootReducer";
import Flexbetween from "./Flexbetween";
import { IconButton } from "@mui/material";
import { Notifications } from "@mui/icons-material";



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = () => {
    const user:UserType  = useSelector((state:RootState)=>state.global.user);
  return (
       <div className="p-3">
            <Flexbetween>
                <div className="rounded-full">
                    <img height={"50px"} width={"50px"} className="rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt={`${user?.name}`}/>
                </div>
                <IconButton>
                    <Notifications sx={{color:"white"}}/>
                </IconButton>
            </Flexbetween>
       </div>
  )
}

export default Header
