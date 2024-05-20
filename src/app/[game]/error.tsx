"use client";

import React from "react";
import Link from "next/link";
import "@/styles/error.css";

const Error = () => {
  return (
    <div className="error">
      <h1>An error has occurred. Sorry for that !</h1>
      <Link className="back-btn" href="/">
        Go Home
      </Link>
    </div>
  );
};

export default Error;

// bunlar client side componentler
// kullanıcı istek attığında backend te sorun ile karşılaştığında bu sayfa gösterilecek
