function Register(){
  return(
      <div className = "flex items-center justify-center">
    <div className="italic w-full max-w-md  m-10 p-20 border-1 border-black rounded-xl bg-blue-200 ">

        <h1 className="italic text-3xl font-bold" align="left">
        Create Account
        </h1>
        <form className="mt-15">
           <label for="username" className="mt-3 block text-sm font-medium text-gray-700">Name:</label>
           <input type="text" id="username" name="username" className=" border-2 rounded-lg p-2"></input><br/>

           <label for="email" className="mt-3 block text-sm font-medium text-gray-700">Email:</label>
           <input type="email" id="email" name="email" className="border-2 rounded-lg p-2"></input><br/>

           <label for="password" className="mt-3 block text-sm font-medium text-gray-700">Password:</label>
           <input type="password" id="password" name="password" className="border-2 rounded-lg p-2"></input><br/>

           <label for="confirm-password" className="mt-3 block text-sm font-medium text-gray-700">Confirm password</label>
           <input type="password" id="confirm-password" className="border-2 rounded-lg p-2" required></input>

           <input type="Submit" value="Submit " id="Login" className="mt-3 block text-sm font-medium text-gray-700
           border-1 border-black border-2 rounded-lg p-2 bg-green-500"/>
           </form>
      </div>
    </div>
  )
};
export default Register;