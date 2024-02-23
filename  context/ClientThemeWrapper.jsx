"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/ context/ThemeContext";

function ClientThemeWrapper({ children }) {
  const { theme } = useContext(ThemeContext);
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const screenHeight = window.innerHeight;
      const divHeight = document.body.scrollHeight;

      if (divHeight > screenHeight) {
        setHeight("100%");
      } else {
        setHeight("100vh");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div data-theme={theme} style={{ height: height }}>
      {children}
    </div>
  );
}

export default ClientThemeWrapper;
