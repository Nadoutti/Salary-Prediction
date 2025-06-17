import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  API_URL_ROOT = "http://127.0.0.1:5000"

  const [prediction, setPrediction] = useState("");
  const [experience, setExperience] = useState("");
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await  axios.post(`${API_URL_ROOT}/predict`, {
        experience: experience,
      });
      setPrediction(response.data.prediction);
    }
  }

  catch (error) {
    console.error("Error fetching prediction:", error);
    setPrediction("Error fetching prediction");
  }

  };



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
          <form onSubmit={handleSubmit} className="
            border
            rounded-lg 
            border-gray-300
            w-full
            p-6
            flex
            flex-col
            gap-5" >
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

        {prediction ? (
          <p className="
            font-bold
            mt-7
            cursor
            typewriter-animation

            ">Your salary will be..</p>
            ) : (
          <p className="
            font-bold
            mt-7
            cursor
            typewriter-animation

            ">Your salary will be {prediction}</p>
            )
        }


      </div>
    </div>

  </div>
);
}
