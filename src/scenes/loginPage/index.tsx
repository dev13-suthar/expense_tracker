import {Box,TextField,Button,} from "@mui/material";
import { Formik,FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setuser } from "../../state";

type loginPageTypes = {
  email:string,
  password:string
}

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async(values:loginPageTypes,formikHelpers: FormikHelpers<loginPageTypes>)=>{
    const res = await fetch('https://expensetrack-api.onrender.com/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values)
    })
    const login = await res.json();
    if(login){
      dispatch(setuser({user:login.user,token:login.token}))
    }

    formikHelpers.resetForm();
    navigate('/home')
  }

  const handleFormSubmit = async(values:loginPageTypes,formikHelpers: FormikHelpers<loginPageTypes>)=>{
        login(values,formikHelpers);
        formikHelpers.resetForm();    
  }
  return (
    <>
      <header className="p-3 mt-8 font-semibold text-center text-slate-100">
        <p className="text-[2.4rem]">Loginn!</p>
      </header>
    <div className="p-4 flex justify-center items-center bg-red-200">
      <Formik
      onSubmit={handleFormSubmit}
      initialValues={{
        email:'',
        password:''
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
          <form className="p-[0.75rem] w-3/4" onSubmit={handleSubmit}>
            <Box p={"1rem"} display={"flex"} flexDirection={"column"} gap={"1.1rem"}>
              <TextField
              label={"Email"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              />{errors.email && touched.email && errors.email}

              <TextField
                    type="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                  />{errors.password && touched.password && errors.password}

              <Button type="submit"  fullWidth sx={{
                backgroundColor:"#aceef7",
                ":hover":{
                  backgroundColor:"#82e0ed",
                  color:"whitesmoke"
                }
              }}>Login</Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
    <div className="flex justify-center">
        <Box width={"75%"} padding={"1rem"} ml={"3rem"} color={"whitesmoke"}>
        <p>Don&apos;t have an account?</p><p className="font-semibold underline cursor-pointer" onClick={()=>navigate('/register')}>Sign Up</p>
        </Box>
    </div>
  </>
  )

}

export default LoginPage
