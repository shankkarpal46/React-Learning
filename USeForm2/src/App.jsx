import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting,isSubmitted },
  } = useForm();

  // let [username, setUsername] = useState ("")
  // let [email,setEmail] = useEmail("")
  // let [password,setPassword] = useState("")

  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log(username,email,password)
  // }

  async function onSubmits(){
    await new Promise((resolve,reject)=>{
      setTimeout (()=>{
        resolve("ok")
      })
      console.log(data)
    })  
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit((data)=> onSubmits(data))} noValidate>
        {isSubmitted?<h5 style={{color:"green", padding:"5px", border:"1px solid gray", backgroundColor:"white"}}>Data submitted sucessfully!!...</h5>:""}
        <label htmlFor="name">Username</label>
        <input type="text" id='name' {...register('username',{required:{value:true,message:"Username is required"},minLength:{value:5,message:"Username must be atleast 5 character"}})}/><br/><br/>
        {errors.username && <p>{error.username.message}</p>}
        <label htmlFor="email">Email</label><br/>
        <input type="email" id='email' {...register('email',{required:{value:true,message:"Email is required"},pattern:{value:/^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm,message:"Email not valid"}})}/><br/><br/>
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password</label><br/>
        <input type="password" id='password' {...register('password',{required:{value:true,message:"Password is required"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/,message:"Password is not valid"}})}/><br/><br/>
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" value="submit" disabled={isSubmitting}/>
      </form>
    </>
  )
}

export default App
