import React, { useState } from "react";


function App() {

  const [isSignIn,setIsSignIn]=useState(true)

  return (
    <>
    
      <div className=" w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border text-white border-gray-900  flex  justify-center items-center  bg-white/35">
      
        <div className="w-[80%] md:w-[30%] h-fit  flex flex-col  backdrop-blur-lg bg-black/30 shadow-2xl rounded-3xl p-2">
          <h1 className=" pt-5 text-3xl h-full font-bold text-center md:w-full">{isSignIn?"Sign in":"Sign up"}</h1>
          <div className="p-10 w-full  h-full">
          <form action="" className="">
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-5 ">
                  <p>Username : </p>
                  <input type="text" name="" id="" className="p-2 border    text-black  w-[80%] rounded-xl"/>
              </li>
              <li className="flex flex-col gap-5">
                  <p>Password : </p>
                  <input type="password" name="" id="" className="p-2 border text-black  w-[80%] rounded-xl"/>
              </li>
              {!isSignIn && (<li className="flex flex-col gap-5 ">
                  <p>Email : </p>
                  <input type="email" name="" id="" className="p-2 border text-black  w-[80%] rounded-xl"/>
              </li>
              )}
              
              {/* <button className=" transition mt-9   shadow-lg text-black bg-gradient-to-r from-blue-500 to-pink-300      font-bold p-2 rounded-3xl w-full ">Sign in</button> */}
    <button type="submit" className="transition mt-9   shadow-lg text-black bg-gradient-to-r from-blue-500 to-pink-300      font-bold p-2 rounded-3xl w-full "
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
              
            </ul>
            
          </form>
          <p className="text-center text-white mt-4">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          {/* <button onClick={() => setIsSignIn(!isSignIn)}
            className="text-blue-300 hover:underline" >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button> */}
          <button onClick={()=>setIsSignIn(!isSignIn)} className="">
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
          </div>
        </div>
        {/* <div className="w-[30%] h-fit  flex flex-col  backdrop-blur-lg bg-black/30 shadow-2xl rounded-3xl p-2">
          <h1 className=" pt-5 text-3xl h-full font-bold text-center w-full">Sign up form</h1>
          <div className="p-10  h-full">
          <form action="" className="">
            <ul className="flex flex-col gap-6">
              
              <li className="flex flex-col gap-5 ">
                  <p> Username : </p>
                  <input type="text" name="" id="" className="p-2 border   w-[80%] rounded-xl"/>
              </li>
              <li className="flex flex-col gap-5">
                  <p>Password : </p>
                  <input type="password" name="" id="" className="p-2 border  w-[80%] rounded-xl"/>
              </li>
              <li className="flex flex-col gap-5 ">
                  <p>Email : </p>
                  <input type="email" name="" id="" className="p-2 border  w-[80%] rounded-xl"/>
              </li>
              <button className=" transition mt-9   shadow-lg text-black bg-gradient-to-r from-blue-500 to-pink-300      font-bold p-2 rounded-3xl w-full ">Sign up</button>
            </ul>
            
          </form>
          </div>
        </div> */}
        
      </div>
    </>
  )
}

export default App

