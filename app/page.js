"use client";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

function page() {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    getImages()
  }, [])
  
  const getImages = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    const data = res.data;
    setImages(data);
    console.log(Images);
  };
  return (
    <>
      <div className="bg-black text-white px-5 py-10 min-h-screen">
        <button
          onClick={getImages}
          className="bg-[#2652bf] px-3 py-2 rounded-lg text-white font-semibold text-sm mb-10 select-none"
        >
          Get Images
        </button>
        <div className="grid grid-cols-2 justify-items-center">
          {Images.map((elem) => {
            return (
              <div>
                <h1 className="font-bold text-xl mb-5 mt-10">
                  {elem.author}
                </h1>
                <img src={elem.download_url} className="w-[45vw] rounded-lg" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default page;
