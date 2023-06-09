import React from "react";
import image from "../Assets/Images/BgImg-3.jpeg"
import image2 from "../Assets/Images/bgimgVision.png"

const Vision = () => {
  return (
    <>
    <div className="h-[95vh] bg-center bg-cover bg-no-repeat mb-[30%]  "
    style={{
      backgroundImage: `url(${image})`,
      // overflowX:"hidden",
      // overflowY:"auto",
    }}>
    <div className=" m-3 Heading font-roboto text-4xl relative top-[150px] left-[5%]  text-white  py-10">
    
      <h1 className="text-8xl text-left relative left-10 ">Our Mission</h1>
      <p className="mt-10 ml-[30px] w-[700px]">At Finovatech, our vision is to revolutionize the way people manage their finances. We strive to provide innovative solutions that simplify the complex world of finance, empowering individuals and businesses to take control of their financial future. Our ultimate goal is to help our clients achieve financial success and security, one transaction at a time.</p>
    </div>
      <div className="
      bg-[#141414]  h-[600px] 
       border-[0.2px] border-[#858585] 
       mx-[5%] mt-[15%] 
       ">
          <div style={{
      backgroundImage: `url(${image})`,
      // overflowX:"hidden"
      // overflowY:"hidden"
    }}>
            
    </div><div
            className="h-[600px] bg-contain bg-no-repeat "
          style={{
              backgroundImage: `url(${image2})`,
          }}
      >
    <div className="text-white/50 text-3xl  w-[360px] relative top-[100px] left-[800px] font-sans">
            <p>
                In the vibrant realm of financial technology,
                FinovaTech emerged as a beacon of innovation and
                empowerment. With a clear mission to revolutionize
                how individuals interacted with their finances, we
                strive to demystify the complexities of personal finance,
                making it accessible and understandable to everyone. Our
                aim is to empower individuals with the knowledge, tools,
                and resources they need to make informed financial decisions,
                achieve their goals, and build a secure future. With cutting-edge
                technology and a user-centric approach, Finovatech promises to be a
                trusted companion on the path to financial well-being. Together, let
                us unlock the true potential of your finances and embark on a journey
                towards financial freedom.
              </p>
      </div>
          </div>

          
        </div>
        
        
        
  
        
      </div>
  </>
  );
};

export default Vision;

