export default function Input({labelName,type, placeholder}){
    return(
        <div>
           <label for="username" className="mt-3 block text-sm font-medium text-gray-700">{labelName}</label>
           <input type={type}
           placeholder={placeholder}
           className=" border-2 rounded-lg p-2">
           </input><br/>
        </div>
    );
}