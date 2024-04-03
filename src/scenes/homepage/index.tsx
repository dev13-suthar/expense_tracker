import { Divider } from "@mui/material"
import AccountOverView from "../../components/AccountOverView"
import Header from "../../components/Header"

import Categories from "../categories"
import RecentTransactions from "../recentTransaction"

const Homepage = () => {
  return (
    <>
    <div className="text-slate-100 h-[95vh] overflow-scroll">
          <Header/>
          <AccountOverView/>
          <Divider sx={{
            "&":{
              backgroundColor:"white"
            }
          }}/>
          <div className="">
              <Categories/>
              <RecentTransactions/>
          </div>
    </div>  
    </>
  )
}

export default Homepage
