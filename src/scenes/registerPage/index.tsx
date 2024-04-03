import {Box,TextField,Button} from "@mui/material";
import { Formik, FormikHelpers} from "formik";
import { useNavigate } from "react-router-dom";


type RegisterPageTypes = {
  Name:string,
  Password:string,
  Email:string,
}

const RegisterPage = () => {
      const navigate = useNavigate();
      // Register function for Fetch
      const register = async(value:RegisterPageTypes, formikHelpers: FormikHelpers<RegisterPageTypes>)=>{
          const res = await fetch(`https://expensetrack-api.onrender.com/auth/register`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(value)
          });
       
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          await res.json();
          formikHelpers.resetForm();
      }

      const handleFormSubmit = async(values: RegisterPageTypes, formikHelpers: FormikHelpers<RegisterPageTypes>)=>{
          await register(values,formikHelpers);
          formikHelpers.resetForm();
          navigate('/')
      }
  return (
    <>
      <header className="p-4 mt-[2rem] text-slate-100">
        <p className="text-[2.5rem] font-semibold text-center">
          Welcome!! Register
        </p>
      </header>
      <div className="flex flex-col gap-[0.77rem] justify-center items-center bg-red-100">
        <Box width={"75%"}>
          <Formik onSubmit={handleFormSubmit}
            initialValues={{
              Name: "",
              Email: "",
              Password: "",
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form className="p-[0.75rem]" onSubmit={handleSubmit}>
                <Box display={"flex"} flexDirection={"column"} gap={"1.1rem"}>
                  <TextField
                    label="Name"
                    value={values.Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="Name"
                  />
                  {errors.Name && touched.Name && errors.Name}

                  <TextField
                    label="email"
                    value={values.Email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="Email"
                  />
                  {errors.Email && touched.Email && errors.Email}
                  <TextField
                    label="Password"
                    value={values.Password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="Password"
                  />
                  {errors.Password && touched.Password && errors.Password}
                  <Button
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: "#aceef7",
                    ":hover": {
                      backgroundColor: "#82e0ed",
                      color: "whitesmoke",
                    },
                  }}
                >
                  Register
                </Button>
                </Box>
              </form>
            )}
          </Formik>
          <p className="ml-4 text-slate-100">Already Member?</p>
          <p className="font-semibold underline cursor-pointer ml-4 text-slate-100" onClick={()=>navigate('/')}>Login</p>
        </Box>
      </div>
    </>
  );
}

export default RegisterPage

