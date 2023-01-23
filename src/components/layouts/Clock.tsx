import React, { useEffect, useState } from "react";
import { PublicRoutes } from "../../router/routes";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const currentPath = window.location.pathname.slice(1);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="Clock">{currentPath !== PublicRoutes.LOGIN && time}</div>
  );
};

export default Clock;
