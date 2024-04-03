import { useDispatch, useSelector } from 'react-redux';
import Flexbetween from './Flexbetween'
import PersonIcon from '@mui/icons-material/Person';
import { RootState } from "../state/rootReducer"
import { removeUser, UserType } from '../state';
import { Logout } from '@mui/icons-material';
import { IconButton } from '@mui/material';


const Navbar = () => {
  const dispatch = useDispatch();
  const user:UserType  = useSelector((state:RootState)=>state.global.user);
  if(!user){
    return "Loadinggg..."
  }
  return (
    <nav className="py-[1rem] px-[0.4rem]  bg-slate-300 sm:py-[1rem] sm:px-[3rem]">
        <Flexbetween>
            <p className='text-3xl font-bold text-slate-800 hidden sm:block'>BudgetBuddy</p>
            <div className='flex gap-[1rem] items-center'>
            <Flexbetween gap={"0.55rem"} border={"1px solid"} p={"7px"}>
                <PersonIcon/>
                <p>{user.name?.toUpperCase()}</p>
            </Flexbetween>
            <IconButton onClick={()=>{
              dispatch(removeUser())
            }}>
            <Logout/>
            </IconButton>
            </div>
        </Flexbetween>
    </nav>
  )
}

export default Navbar

