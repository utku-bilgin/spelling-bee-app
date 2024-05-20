import React from "react";
import "@/styles/loading.css"
import Image from 'next/image'

function Loading() {
  return (
    <div className="loading" >
      <div >
      <Image   
      src="/loading.gif"
      width={250}
      height={250}
      alt="loading" />
      </div>
    </div>
  );
}

export default Loading;
