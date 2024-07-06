import { useState } from "react"
import Axios from "axios"
function Rf(){
    const [email, setEmail]= useState('');
    const [name, setName]= useState('');
    const [number, setNumber]= useState('');

    const[popupForm,setPopupForm]=useState(false)
    const referForm=()=>{
           setPopupForm(!popupForm);
    }

    const submit=()=>{
   Axios.post("/api",{email,name,number})
   .catch((e)=>console.log(e));

   setEmail("")
   setName("")
   setNumber("")
    }
return !popupForm ?(
<>
<div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/refer&earn.jpg"
                            alt="image"
                            className="shadow-2xl"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Redeem as much you can...
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                        <p className="mt-6 text-gray-600 text-xl shadow-sm ">
                        How to <a href="/" className="text-blue-700">refer?</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
<button className="text-white bg-blue-500 hover:bg-blue-700 m-3 p-3 rounded-lg text-xl font-medium" onClick={referForm}>Refer Now</button>
</>
) : (<>
<div >
 <div className=" pl-40 pt-6 pb-6 pr-40 rounded-lg shadow-2xl  m-20" >
         <div className=" p-8">
          <h2 className="text-4xl text-orange-700 font-medium cursor-pointer">Refer & Earn</h2>
          <div className=" container mt-7 justify-between space-y-10 font-medium pb-16 pt-16"  >

            <label for="email" className="text-2xl text-gray-700 cursor-pointer">Email:
                <input 
                className="ml-6 mb-4 w-100 mt-2 py-3 px-3 rounded-lg bg-white border
                 border-gray-400 text-gray-800  focus:border-orange-500 focus:outline-none"
                type="email" 
                id="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required/>
            </label>
            <br/>
            <label for="name" className="text-2xl text-gray-700 cursor-pointer" >Name:
                <input 
                className="ml-6 mb-4 w-100 mt-2 py-3 px-3 rounded-lg bg-white border
                 border-gray-400 text-gray-800  focus:border-orange-500 focus:outline-none"
                  type="text"
                   id="name" 
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
                  required/>
            </label>
            <br/>
            <label for="number" className="text-2xl text-gray-700 cursor-pointer" >Mobile No.:
                <input 
                className="ml-6 mb-4 w-100 mt-2 py-3 px-3 rounded-lg bg-white border
                 border-gray-400 text-gray-800 focus:border-orange-500 focus:outline-none"
                  type="number" 
                  id="number" 
                 minLength="10"
                 maxLength="10"
                  value={number}
                   onChange={(e)=>setNumber(e.target.value)}
                  required/>
            </label>
            <br/>
            <button onClick={submit} className="bg-orange-700 text-white p-4 hover:bg-orange-800 font-medium rounded-lg pl-6 pr-6">Submit</button>
            <button onClick={referForm} className="bg-orange-700 ml-3 text-white p-4 hover:bg-red-700 font-medium rounded-lg pl-6 pr-6">Cancel</button>
          </div>
          
         </div>
 </div>
 </div>
</>)}

export default Rf