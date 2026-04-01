import React, { useState } from "react";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [bills, setBills] = useState([]);

  return (
    <div className="app">
      <h1>📄 Bill Scanner Pro</h1>

      <Upload setBills={setBills} />
      <Dashboard bills={bills} />
    </div>
  );
}
