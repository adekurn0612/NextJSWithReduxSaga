

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import lock from "../../../public/OIG (4).png"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import handleLogin from "../redux/action/saga/login";
import { reqLogin } from "../redux/action/actionReduce";

const Login = () => {
  const dispatch =useDispatch();
  type FormValues = {
    
    user_name: string;
    password: string;
  };

  const {

    register,
    handleSubmit,
  } = useForm<FormValues>();

  const router = useRouter();

  const handleMengLogin = (e :any) => {
    dispatch(reqLogin(e))

  };

  useEffect(():any=>{
    const tokenku =localStorage.getItem('token')
    if(tokenku){
      router.push('/')
    }
  },[handleMengLogin])

  return (
    <div>
    <section className="h-screen">
<div className="container h-full px-10 py-15">
<div
  className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
  <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
    <Image 
    src={lock} 
    alt="i am nyuru login"
    className="w-full hover:rotate-180 transition duration-500 ease-in-out">
      </Image>
  </div>

  <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
    <form 
    onSubmit={handleSubmit(handleMengLogin)}
    >
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-black-50 bg-white-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          {...register('user_name')}
           />
        <label
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >user name
        </label>
      </div>

      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="password"
          className="peer block min-h-[auto] w-full rounded border-black-50 bg-white-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Password" 
          {...register('password')}
          />
        <label
          htmlFor="exampleFormControlInput33"
          className=" pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Password
        </label>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem]
    w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid
    border-blue-500 outline-none before:pointer-events-none 
    before:absolute before:h-[0.875rem] before:w-[0.875rem] 
    before:scale-0 before:rounded-full before:bg-transparent
    before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent]
    before:content-[''] checked:border-blue-500 checked:bg-blue-500
    checked:before:opacity-[0.16] checked:after:absolute 
    checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block 
    checked:after:h-[0.8125rem] checked:after:w-[0.375rem] 
    checked:after:rotate-45 checked:after:border-[0.125rem] 
    checked:after:border-l-0 checked:after:border-t-0 
    checked:after:border-solid checked:after:border-white 
    checked:after:bg-transparent checked:after:content-[''] 
    hover:cursor-pointer hover:before:opacity-[0.04] 
    hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
    focus:shadow-none focus:transition-[border-color_0.2s] 
    focus:before:scale-100 focus:before:opacity-[0.12] 
    focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
    focus:before:transition-[box-shadow_0.2s,transform_0.2s]
    focus:after:absolute focus:after:z-[1] focus:after:block
    focus:after:h-[0.875rem] focus:after:w-[0.875rem] 
    focus:after:rounded-[0.125rem] focus:after:content-[''] 
    checked:focus:before:scale-100
    checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] 
    checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
    checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] 
    checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] 
    checked:focus:after:rotate-45 checked:focus:after:rounded-none
    checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 
    checked:focus:after:border-t-0 checked:focus:after:border-solid
    checked:focus:after:border-white checked:focus:after:bg-blue
    dark:border-neutral-600 dark:checked:border-primary 
    dark:checked:bg-primary 
    dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] 
    dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
  type="checkbox"
  value=""
  id="exampleCheck3"
  checked
/>
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="exampleCheck3">
            Remember me
          </label>
        </div>

        <a
          href="#!"
          className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >Forgot password?</a>
      </div>

      <button
        type="submit"
        className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Sign in
      </button>
      <a href="/adduser" className="text-center">daftar</a>
    </form>
  </div>
</div>
</div>
</section>
  </div>
  );
};

export default Login;
