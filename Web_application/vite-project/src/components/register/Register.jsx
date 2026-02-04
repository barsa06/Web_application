function Register(){
  return(
    <div className="italic w-full max-w-md  m-10 p-20 border-2 border-black rounded-xl bg-blue-200">
        <h1 className="italic text-3xl font-bold" align="left">
         **Login form**
        </h1>
        <form className="mt-15">
           <label for="username" className="mt-3 block text-sm font-medium text-gray-700">Username:</label>
           <input type="text" id="username" name="username" className=" border-2 rounded-lg p-2"></input><br/>

           <label for="password" className="mt-3 block text-sm font-medium text-gray-700">Password:</label>
           <input type="password" id="password" name="password" className="border-2 rounded-lg p-2"></input><br/>

           <label for="email" className="mt-3 block text-sm font-medium text-gray-700">Email:</label>
           <input type="email" id="email" name="email" className="border-2 rounded-lg p-2"></input><br/>

           <input type="Submit" value="Log in" id="Login" className="mt-3 block text-sm font-medium text-gray-700
           border-1 border-black rounded-md p-2 bg-green-500"/>
           </form>
    </div>
  )
};
export default Register;