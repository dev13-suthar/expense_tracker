// import { InputBase } from "@mui/material"
import { TextField } from "@mui/material"
import { Formik, FormikHelpers } from "formik"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMoneyToWallet, UserType } from "../../state"
import { RootState } from "../../state/rootReducer"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

type FormProps = {
  Description: string
  Category: string
  To: string
};


const AddMoney = () => {
    const user:UserType  = useSelector((state:RootState)=>state.global.user);
    const [amount, setamount] = useState<number | string >(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addMoney = async(value:FormProps,formikHelpers: FormikHelpers<FormProps>)=>{
        const res = await fetch(`https://expensetrack-api.onrender.com/transactions/new/${user?._id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({description:value.Description,amount:amount,type:"credit"})
        });
        await res.json();
        dispatch(addMoneyToWallet({amount:Number(amount)}));
        navigate('/home')
        toast.success("Money Added!!")
        formikHelpers.resetForm();
    }

    const handleFormSubmit = async(value:FormProps,formikHelpers: FormikHelpers<FormProps>)=>{
        await addMoney(value,formikHelpers);
        formikHelpers.resetForm();
    }



  return (
    <div className="bg-green-400 mt-2">
        <header className="p-4 flex justify-center items-center relative">
            <span className="absolute left-2 text-3xl cursor-pointer" onClick={()=>navigate('/home')}>&larr;</span>
            <p className="text-xl text-sky-50 font-normal">Add Money / Income</p>
        </header>
        {/* How Much Money*/}
        <div className="p-8 mt-[3rem] flex flex-col justify-start mb-6">
            <p className="text-green-100 text-xl mb-2">How Much?</p>
            <input onChange={(e)=>setamount(e.target.value)} value={amount}  className="text-[2.4rem] font-medium text-white" style={{
                background:"lightgreen",
                padding:"4px",
                borderRadius:"8px"
            }}/>
        </div>  
        {/* All Transaction Details */}
        <div className="bg-slate-100 rounded-tl-2xl rounded-tr-2xl p-3 flex flex-col gap-2">
            <Formik
                onSubmit={handleFormSubmit}
             initialValues={{
                Description:"",
                Category:"",
                To:"",
             }}
             >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
            })=>(
                <form className="flex justify-center 
                flex-col gap-6 mt-6" onSubmit={handleSubmit}>
                    <TextField
                    label="Description"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="Description"
                    sx={{mb:"0.56rem"}}
                    />
                    {errors.Description && touched.Description && errors.Description}
                    <TextField
                    label="Category"
                    value={values.Category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="Category"
                    sx={{mb:"0.56rem"}}
                    />
                    <TextField
                    label="To Whom"
                    value={values.To}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="To"
                    sx={{mb:"0.56rem"}}
                    />
                     <button type="submit" className="mt-[2rem] mb-[4rem] p-3 bg-[rgb(127,61,255)] rounded-sm text-slate-100 text-xl font-medium">Continue</button>
                </form>
            )}  
             </Formik>
            
        </div>
    </div>
  )
}

export default AddMoney
