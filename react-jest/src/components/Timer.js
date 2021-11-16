import React from "react";

const Timer = () => {
  const now = new Date();
  const sec = new Date(now).getSeconds();
  return <div>현재는 {sec}초 입니다.</div>;
};

export default Timer;
