import { useState, useEffect } from "react";
import { getCollection } from "../functions";
import { AuthPage, Dashboard } from "./";
import "../styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <AuthPage /> */}
      <Dashboard />
    </div>
  );
}
