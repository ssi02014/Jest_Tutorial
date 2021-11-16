import React from "react";

const Hello = ({ user }) => {
  return (
    <>{user?.name ? <div>Hello! {user.name}</div> : <button>Login</button>}</>
  );
};

export default Hello;
