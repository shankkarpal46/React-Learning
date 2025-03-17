import { useRef } from "react";

function Test(params) {
    let username = useRef()
    let email = useRef()
    let password=useRef()

    function handleSubmit(e){
        e.preventDefault()
        console.log(username.current.value," ",email.current.value," ",password.current.value)
    }

    return(
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