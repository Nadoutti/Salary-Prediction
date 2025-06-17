import { useState } from "react";

export default function Home() {

  

  return (
    <div className="
      bg-gray-100
      h-screen
      flex
      items-center
      justify-center">
      <div className="
        w-7/10
        h-11/12
        bg-white 
        rounded-lg
        flex
        flex-col
        gap-5
        pl-10
        shadow-md 
        pt-20
        ">

        <h1 className="text-4xl font-bold mb-4">Predict your salary as a data scientist with AI!</h1>
        <p className="
          text-lg 
          mb-8
          ">Enter your details to get a personalized salary prediction.</p>
        <div className="
          w-11/12 
          flex
          flex-col
          gap-5
          justify-start
          mt-8">
          <form className="
            border
            rounded-lg 
            border-gray-300
            w-full
            p-6
            flex
            flex-col
            gap-5" >
            <div>
              <label htmlFor="experience" className="
                block 
                font-medium 
                text-gray-700
                font-bold
                text-[28px]">Years of Experience</label>
              <input
                id="experience"
                type="number"
                onChange={e => setExperience(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter years of experience"
              />
            </div>
            <button type="submit" className="
              w-1/4 
              bg-blue-600 
              text-white 
              py-2 
              px-4 
              rounded-md 
              font-bold
              hover:bg-blue-700 
              transition 
              duration-200
              mt-5">Predict Salary</button>
          </form>

          <p className="
            font-bold
            mt-7
            cursor
            typewriter-animation

            ">Your salary will be..</p>
          
        </div>
      </div>

    </div>
  );
}
