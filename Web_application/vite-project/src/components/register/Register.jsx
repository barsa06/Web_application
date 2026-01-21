function Register(){
  return(
    <div>
        <h1>
         login form
        </h1>
           <label for="username">Username:</label>
           <input type="text" id="username" name="username"></input>

           <label for="password">Password:</label>
           <input type="password"></input>

           <label for="email">Email:</label>
           <input type="email" id="email" name="pwd"></input>
    </div>
  )
};
export default Register;