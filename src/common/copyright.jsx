import React, { useState, useEffect } from "react";
import { Typography, Link } from "@mui/material";
import "animate.css";

export default function Copyright(props) {
  const [copyrightHoverClass, setCopyrightHoverClass] = useState("");
  const [changed, setChanged] = useState({
    borderRadius: "5px",
    opacity: 0.3,
  });

  const { companyname } = props;

  return (
    <Typography
      className={copyrightHoverClass}
      style={changed}
      variant="body2"
      onMouseOver={() => {
        setChanged({
          backgroundColor: "#fff",
          borderRadius: "15px",
          opacity: 1,
        });
        setCopyrightHoverClass("animate__animated  animate__zoomIn");
      }}
      onMouseOut={() => {
        setChanged({
          borderRadius: "5px",
          opacity: 0.3,
        });
        setCopyrightHoverClass("");
      }}
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        {companyname}
      </Link>
      {""}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
