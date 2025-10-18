"use client"
import React, {useState} from "react";

const page = () => {

  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generatedurl, setgeneratedurl] = useState("")

  return (
    <>
      <div className="shorten w-screen h-[90vh] flex items-center justify-center ">
        <div className="cont flex flex-col bg-blue-400 justify-center items-center w-3xl h-80 gap-10 rounded-br-4xl rounded-tl-4xl relative">
          <h1 className="text-2xl font-bold text-black border-l-2 border-b-2 p-2 rounded-bl-2xl border-amber-50">
            Generate your short URLs
          </h1>
          <div className="inputs flex flex-col text-black gap-5">
            <input
              type="url"
              value={url}
              placeholder="Enter your URL"
              className="w-xl p-2 border-2 border-amber-50 rounded-br-3xl rounded-tl-3xl hover:border-3"
              onChange={(e)=>{
                seturl(e.target.value)
              }}
            />
            <input
              type="text"
              value={shorturl}
              placeholder="Enter your preferred your short URL text"
              className="w-xl p-2 border-2 border-amber-50 rounded-br-3xl rounded-tl-3xl hover:border-3"
              onChange={(e)=>{
                setshorturl(e.target.value)
              }}
            />
            <div className="btn text-center mt-10">
              <button className="bg-blue-500 font-bold p-2 text-white rounded-xl hover:bg-blue-600">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
