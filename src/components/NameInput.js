import React, { useState } from 'react';

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Enter Your Name:</h3>
      <input
        type="text"
        placeholder="Your name here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      {name && <p>Hello, <strong>{name}</strong>! Welcome to the documentation.</p>}
    </div>
  );
}
