import {useForm} from 'react-hook-form'
import React from 'react'
import './style.css'


const App = () => {

const {register,handleSubmit,watch,formState:{errors} } = useForm();

const onSubmit = () =>{
alert('Sent')
}

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register freee</h1>
      <input
        placeholder="Enter Your Name"
        id="name"
        type="text"
        {...register("name", {
          required: true,
          maxLength: 10,
          minLength: 5,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors.name && errors.name.type == "required" && <span>Please type name</span>}
      {errors.name && errors.name.type == "maxLength" && <span>Length is too long</span>}
      {errors.name && errors.name.type == "pattern" && <span>Only letters</span>}
      {errors.name && errors.name.type == "minLength" && <span>Length is not enough</span>}
     

      <input
        placeholder="Enter Your Surname"
        id="Surname"
        type="text"
        {...register("surname", {
          required: true,
          maxLength: 10,
          minLength: 5,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors.surname && errors.surname.type == "required" && <span>Please type Surname</span>}
      {errors.surname && errors.surname.type == "maxLength" && <span>Length is too long</span>}
      {errors.surname && errors.surname.type == "pattern" && <span>Only letters</span>}
      {errors.surname && errors.surname.type == "minLength" && <span>Length is not enough</span>}

      <input
        placeholder="Enter Your email"
        id="email"
        type="text"
        {...register("email", {
          required: true,
          maxLength: 20,
          minLength: 10,
          pattern: /\S+@\S+\.S+/
        })}
      />
      {errors.email && errors.email.type == "required" && <span>Please type email</span>}
      {errors.email && errors.email.type == "maxLength" && <span>Length is too long</span>}
      {errors.email && errors.email.type == "pattern" && <span>Only letters</span>}
      {errors.email && errors.email.type == "minLength" && <span>Length is not enough</span>}
     
      <input
        placeholder="Enter Your age"
        id="age"
        type="text"
        {...register("age", {
          required: true,
          maxLength: 2,
          minLength: 1,
          pattern: /^[0-9]+$/i
        })}age
      />
      {errors.age && errors.age.type == "required" && <span>Please type age</span>}
      {errors.age && errors.age.type == "maxLength" && <span>Length is too long</span>}
      {errors.age && errors.age.type == "pattern" && <span>Ancaq cavanlar</span>}
      {errors.age && errors.age.type == "minLength" && <span>Length is not enough</span>}
     
      <input
        placeholder="Enter Your fin"
        id="fin"
        type="text"
        {...register("fin", {
          required: true,
          maxLength: 7,
          minLength: 7,
          pattern: /^[A-Za-z0-9]+$/i
        })}age
      />
      {errors.fin && errors.fin.type == "required" && <span>Please type fin</span>}
      {errors.fin && errors.fin.type == "maxLength" && <span>fin 7 den cox ola bilmez</span>}
      {errors.fin && errors.fin.type == "pattern" && <span>ancaq reqem ve herf daxil edin</span>}
      {errors.fin && errors.fin.type == "minLength" && <span>fin 7 den az ola bilmez</span>}
     
      <input
        placeholder="Enter Your password"
        id="password"
        type="password"
        {...register("password", {
          required: true,
          maxLength: 15,
          minLength: 8,
        
        })}
      />
      {errors.password && errors.password.type == "required" && <span>Please type password</span>}
      {errors.password && errors.password.type == "maxLength" && <span>Length is too long</span>}
      {errors.password && errors.password.type == "pattern" && <span>Only letters</span>}
      {errors.password && errors.password.type == "minLength" && <span>Length is not enough</span>}
     
      <input
        placeholder="Enter Your rpassword"
        id="rpassword"
        type="password"
        {...register("rpassword", {
          required: true,
          validate: (val)=>{
            if(watch('password')!=val){
             return "rpassword is not valid"
            }
          }
        
        })}
      />
      {errors.rpassword && errors.rpassword.type == "required" && <span>Please type rpassword</span>}
      {errors.rpassword && errors.rpassword.type == "validate" && <span>rpassword is not valid</span>}
     
      <button type="submit">Tesdigle</button>
    </form>
  );};


export default App
