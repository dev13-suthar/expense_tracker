import Flexbetween from './Flexbetween'
import { FoodBank } from '@mui/icons-material'
type props = {
    amount:number | string,
    desc:string
}

const TransactionListV2 = ({amount,desc}:props) => {
  return (
   <div className='bg-[rgb(253,253,253)] rounded-md'>
        <Flexbetween p={"1rem"}>
                <Flexbetween gap={"1rem"}>
                    <FoodBank sx={{fontSize:"large",color:"grey"}}/>
                    <p className='font-semibold text-red-600 text-xl'>{desc}</p>
                </Flexbetween>
            <p className='text-xl text-red-400 font-semibold'>- {amount}&#x20b9;</p>
        </Flexbetween>
   </div>   
  )
}

export default TransactionListV2
