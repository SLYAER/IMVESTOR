import React from "react";

export default function BillCard({ bill }) {
  return (
    <div className="card">
      <h3>{bill.name || "Unknown"}</h3>
      <p>📅 {bill.date}</p>
      <p>💰 ₹{bill.total}</p>
      <p>📦 {bill.product}</p>
    </div>
  );
}
