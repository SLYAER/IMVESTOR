import React from "react";

export default function Upload({ setBills }) {
  const API = "https://your-backend.onrender.com";

  async function scan(e) {
    const file = e.target.files[0];

    const form = new FormData();
    form.append("image", file);

    const res = await fetch(API + "/scan", {
      method: "POST",
      body: form
    });

    const data = await res.json();

    setBills(prev => [data, ...prev]);
  }

  return (
    <div className="upload">
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={scan}
      />
    </div>
  );
}
