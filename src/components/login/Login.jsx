import google from "./image/google.webp";
import facebook from "./image/facebook.webp";
import apple from "./image/apple.png";
import image from "./image/main=image.jpg";
function Login() {
  return (
    <>
      <nav className="p-5 px-20">
        <div className="flex justify-between">
            {/* Logo-section */}
          <div>
            <h1 className="text-xl font-bold text-green-300">BreatheWell</h1>
          </div>
          {/* Menu-section */}
          <div>
            <ul className="flex align-center gap-10 pr-4 font-semibold">
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">Home</a>
              </li>
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">About Us</a>
              </li>
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">Contact</a>
              </li>
              <li
              className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">How to use</a>
              </li> 
            </ul>
          </div>
          <div>
            <ul
            className="flex text-align-center align-center gap-6 text-sm font-semibold"
            >
                <li>English <span class="text-am">▼</span></li>
                <li
                className="hover:text-green-300 cursor-pointer relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
                >Sign in</li>
                <li>
                    <button className="bg-green-300 px-2 py-1 rounded-md">Register</button>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <main 
      className="px-20 pt-8"
      >

        <div>

            <div 
            className="grid grid-cols-3 gap-40"
            >
                <div className="my-auto w-[400px]">
                    <h1 className="text-5xl font-bold mb-8">Welcome back to <br/> Breathewell</h1>
                    <p>if you don't have an<br/> account <br/> you can <span className="font-bold text-green-300">Register here!</span> </p>
                </div>
                <div className="  pt-20">
                    <img src={image} alt="Image not found" className="w-full h-full"/>
                </div>
                
                <div
                className=" "
                >
                    <form className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">Welcome Back</h1>
                        <input type="text" placeholder="Enter Email" className="bg-green-200 hover:bg-white p-2 rounded font-bold" />
                        <input type="password" placeholder="Enter Password" className="bg-green-200 hover:bg-white p-2 rounded font-bold"/>
                        <p className="text-right text-sm hover:text-green-300">Forget Password ?</p>
                        <button className="bg-green-300 px-2 py-1 rounded-md hover:bg-green-400">Sign In</button>
                        <p className="flex text-center align-center text-gray-300">
                            <span className="w-[65px] bg-gray-300 h-[1px] bg-black text-center mt-3"></span>
                        or Continue with 
                        <span className="w-[65px] bg-gray-300 h-[1px] mt-3 bg-black text-center"></span>
                        </p>
                        <div>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="bg-gray-200 px-6 hover:bg-transparent hover:shadow-xl border border-black-900 text-center align-center mx-auto  h-[40px]  rounded-md" >
                                    <img src={google}  className="h-[20px]"/>
                                </button>
                                <button className="bg-gray-200 px-6 hover:bg-transparent hover:shadow-xl border border-black-900 text-center align-center mx-auto  h-[40px]  rounded-md" >
                                    <img src={apple}  className="h-[20px]"/>
                                </button>
                                <button className="bg-gray-200 px-6 hover:bg-transparent hover:shadow-xl border border-black-900 text-center align-center mx-auto  h-[40px]  rounded-md" >
                                    <img src={facebook}  className="h-[20px]"/>
                                </button>
                               
                               
                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </main>
      
    </>
  );
}
export default Login;
