import React from "react";
import BillCard from "./BillCard";

export default function Dashboard({ bills }) {
  return (
    <div className="dashboard">
      {bills.map((b, i) => (
        <BillCard key={i} bill={b} />
      ))}
    </div>
  );
}
