import React from "react";
import Input from "../input/input"
function Login(){
    return(
          <div className = "flex items-center justify-center">
          <div className="w-full max-w-md  m-10 p-20 border-1 border-black rounded-xl bg-blue-200 ">
    
            <h1 className=" text-3xl font-bold" align="left">
            Login
            </h1>
            <form className="mt-15">
               <div>
                <Input labelName="Email:" type="email" placeholder="Enter your email"/>
               </div>
    
               <div>
                <Input labelName="Password:" type="pwd" placeholder="Enter password"/>
               </div>

              <p className="text-center text-sm mt-3">
                 <a href="#" className="mt-3 block text-sm font-medium text-gray-700
           border-1 border-black rounded-lg p-2 bg-green-500 hover:underline">Log in</a>
              </p>
            </form>
            <p className="text-center text-sm mt-3">
                 <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </p>
        </div>
        </div>
        
        )
    
};
export default Login;