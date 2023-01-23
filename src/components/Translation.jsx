import React from 'react';

export default function Translation({ Option, doStuff, setInput, result }) {
  return (
    <>
      <div>{Option.name}</div>
      <div className="flex flex-col">
        <textarea
          className="text-area"
          cols={55}
          rows={10}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className="action-btn" onClick={doStuff}>
          RUN
        </button>

        <h3 className="result-text">{result.length > 0 ? result : ''}</h3>
      </div>
    </>
  );
}
