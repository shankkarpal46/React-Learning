import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // let [username, setUsername] = useState ("")
  // let [email,setEmail] = useEmail("")
  // let [password,setPassword] = useState("")

  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log(username,email,password)
  // }
  return (
    <>
      <form action="" onSubmit={handleSubmit((data)=> console.log(data))}>
        <label htmlFor="name">Username</label>
        <input type="text" id='name' {...register('username',{required:true,minLength:5})}/><br/><br/>
        {errors.username && <p>Username is required</p>}
        <label htmlFor="email">Email</label><br/>
        <input type="email" id='email' {...register('email',{required:true})}/><br/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id='password' {...register('password',{required:true})}/><br/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default App
