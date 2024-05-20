import React from "react";
import Link from "next/link";
import "@/styles/not-found.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>We could not find the page you were looking for !</h1>
      <Link className="back-btn" href="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

// kullanıcı mevcutta olmayan bir sayfaya gitmek istediğinde bu sayfa gösterilecek
