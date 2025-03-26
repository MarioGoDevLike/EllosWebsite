import React from "react";

export const DownloadIcon = ({ color }) => {
  const downloadAPK = () => {
    const apkPath = "/ello-app.apk";
    const link = document.createElement("a");
    link.href = apkPath;
    link.download = "ello-app.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonStyle = {
    border: `2px solid ${color}`,
    backgroundColor: "transparent",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <button onClick={downloadAPK} style={buttonStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill={color} />
      </svg>
    </button>
  );
};
