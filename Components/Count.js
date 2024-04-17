"use client";
import React, { useState } from "react";

function Count() {
  var [cur, upd] = useState(50);
  var updMarks = [{ name: "Talib", marks: 100 }];
  return (
    <div className="mx-3">
      <h1 className="text-white text-xl font-semibold">Count: {cur}</h1>
      <button
        onClick={() => upd(updMarks[0].marks)}
        className="bg-green-900 text-white px-3 py-2 text-sm rounded-lg"
      >
        Update Count
      </button>
    </div>
  );
}

export default Count;
