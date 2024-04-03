import { BrowserRouter,Route,Routes } from "react-router-dom"
import LoginPage from "./scenes/loginPage"
import RegisterPage from "./scenes/registerPage"
import Layout from "./scenes/layout"
import Homepage from "./scenes/homepage"
import AddMoney from "./scenes/addMoney"
import SpendMoney from "./scenes/spendMoney"
import UserTransaction from "./scenes/usertransaction"
import  { Toaster } from 'react-hot-toast';
import StatisTics from "./scenes/Statistics"

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/home" element={<Layout/>}>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/home/Add" element={<AddMoney/>}/>
          <Route path="/home/Spend" element={<SpendMoney/>}/>
          <Route path="/home/transactions" element={<UserTransaction/>}/>
          <Route path="/home/statistics" element={<StatisTics/>}/>
          </Route>
      </Routes>
     </BrowserRouter>
     <Toaster position="bottom-center" gutter={12} containerStyle={{margin:'8px'}} toastOptions={{
      success:{
        duration:3000,
      },
      error:{
        duration:5000,
      },
      style:{
        fontSize:'16px',
        maxWidth:'500px',
        padding:'16px 24px',
        backgroundColor:"lightgreen",
        color:"white",
        fontStyle:"italic"
      }
    }}/>
    </>
  )
}

export default App
