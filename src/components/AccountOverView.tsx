import { useSelector } from "react-redux"
import income from "../assets/small_coming.png"
import expense from "../assets/updated_small_going.png"
import { UserType } from "../state";
import { RootState } from "../state/rootReducer";
import { useEffect, useState } from "react";

type state = {
    Total:number | string
}
type stat2 = {
    amount:number | string
}
const AccountOverView = () => {

    const user:UserType  = useSelector((state:RootState)=>state.global.user);
    const [Incom, setIncom] = useState<null | state>(null);
    const [Expense, setExpense] = useState<null | stat2>(null);
    useEffect(()=>{
        const checkIncome = async()=>{
            try {
                const res = await fetch(`https://expensetrack-api.onrender.com/transactions/checkIncome/${user?._id}`,{
                    method:"GET"
                });
                const data = await res.json();
                setIncom(data);
            } catch (error) {
                console.log(error)
            }
        }
        const checkExpense = async()=>{
            const res = await fetch(`http://localhost:7001/transactions/checkExpense/${user?._id}`,{
                method:"GET"
            });
            const data = await res.json();
            setExpense(data);
        }

        checkIncome();
        checkExpense();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user?._id])
  return (
    <div className="mt-1rem flex flex-col gap-[1.5rem] items-center mb-2">
        <section className="flex flex-col 1rem items-center">
            <p className="text-[13px] italic text-purple-300">Account Balance</p>
            <p className="text-[2.5rem] font-semibold">&#x20b9; {user?.amount}</p>
        </section>
        {/* Income & expense section */}
        <div className="flex gap-6 justify-center">
            <div className="p-3 flex gap-1 rounded-xl bg-green-400 w-[140px]">
                <img src={income} alt="income" height={"50px"} width={"60px"}/>
                <section className="flex flex-col gap-1">
                    <p>Icome</p>
                    <p className="text-xl">{Incom?.Total}</p>
                </section>
            </div>
            <div className="p-3 flex gap-1 rounded-xl bg-red-400">
                <img src={expense} alt="expense" height={"50px"} width={"60px"}/>
                <section className="flex flex-col gap-1">
                    <p>Expense</p>
                    <p className="text-xl">{Expense?.amount}</p>
                </section>
            </div>
        </div>
    </div>
  )
}

export default AccountOverView
