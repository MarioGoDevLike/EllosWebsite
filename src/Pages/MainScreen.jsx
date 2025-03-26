import React from "react";
import logo from "../../src/assets/ello_logo.png"; // Import logo
import { DownloadIcon } from "../components/DownloadIcon";
import { FaAndroid, FaApple } from "react-icons/fa"; // Import icons

export const MainScreen = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <img width={350} height={200} src={logo} alt="Ello Logo" />
      </div>
      <div>
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "1.5em",
            fontWeight: "600",
            color: "#3C768A",
          }}
        >
          Welcome to Ello
        </h1>
        <h3 style={{ color: "#3C768A", fontSize: "0.7em", fontWeight: "400" }}>
          Please click the icon below to download the app.
        </h3>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          gap: "40px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <FaAndroid size={40} color="#3C768A" />
          <div style={{ marginTop: "10px" }}>
            <DownloadIcon color="#3C768A" />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <FaApple size={40} color="#3C768A" />
          <div style={{ marginTop: "10px" }}>
            <DownloadIcon color="#3C768A" />
          </div>
        </div>
      </div>
    </div>
  );
};
