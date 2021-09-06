import React from "react";
import { footer } from "./footer.css";

export default function Footer() {
//we can also use this in any css file....
//   let foooterStyle = {
//     position: "absolute",
//     top: "100vh",
//     width: "100%",
//     border: "2px solid red"
//   };
  return (
    <footer className="bg-dark text-light py-3 my-3 text-center" /*style={footerStyle}*/>
      Copyright &copy; MyTodosList.com
    </footer>
  );
}
