import Flexbetween from './Flexbetween'
import { ReceiptLongOutlined } from '@mui/icons-material'

type Props = {
    amount:number,
    type:string,
    description:string,
    time:string
}

const TransactionList = ({amount,type,description,time}:Props) => {

    const formatDate = (date:string)=>{
        const dateToFormat = new Date(date);
        const resultDate = dateToFormat.toLocaleTimeString();
        return resultDate;
    }
  return (
    <Flexbetween p={"1.55rem"} border={"1px solid"}>
        <Flexbetween gap={"1rem"}>
            <ReceiptLongOutlined sx={{fontSize:"largest"}}/>
            <p className='text-xl font-bold text-slate-100'>{description}</p>
        </Flexbetween>
        <div className='flex flex-col justify-between items-center gap-3'>
            {
                type==='credit'?(
                <p className='text-xl font-semibold text-green-400'>+ {amount}&#x20b9;</p>
                ):(
                    <p className='text-xl font-semibold text-red-400'>- {amount}&#x20b9;</p>
                )
            }
            <p className='text-[13px] font-light'>{formatDate(time)}</p>
        </div>
    </Flexbetween>
  )
}

export default TransactionList
