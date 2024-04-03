import { useSelector } from "react-redux";
import TransactionListV2 from "../../components/TransactionListV2"
import { UserType } from "../../state";
import { RootState } from "../../state/rootReducer";
import { useEffect, useState } from "react";

type ApiData = {
  amount: number;
  categoty:string;
  createdAt: string
  description: string;
  type: string;
  updatedAt: string;
  userId: string;
  __v:  number;
  _id: string;
};

const RecentTransactions = () => {
    const user:UserType  = useSelector((state:RootState)=>state.global.user);
    const [apiData, setapiData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
        useEffect(()=>{

            const recentTransactionsList = async()=>{
                setisLoading(true)
                const res = await fetch(`https://expensetrack-api.onrender.com/transactions/recentexpenses/${user?._id}`,{
                    method:"GET"
                });
                const data =  await res.json();
                setapiData(data);
                setisLoading(false);
            }
            recentTransactionsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        if(isLoading){
            return <h1>Loadinggggg....</h1>
        }
  return (
    <div className="p-2 mt-3">
        <header className="ml-2">
            <p className="text-2xl font-mono  font-thin">Recent expenses</p>
        </header>
        <section className="mt-3 p-2 flex flex-col gap-3">
            {
                apiData.map((item:ApiData)=>(
                    <TransactionListV2 key={item._id} amount={item.amount} desc={item.description}/>
                ))
            }
        </section>
    </div>
  )
}

export default RecentTransactions
