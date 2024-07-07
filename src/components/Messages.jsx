import React from "react";
import Message from "./Message";

function Messages({ className }) {
  return (
    <div
      className={`p-1 overflow-y-scroll scroll-smooth ${className}`}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
