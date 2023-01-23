import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="md:font-semibold text-base md:text-4xl my-3">
          Welcome to the Open AI API Demo
        </h1>
        <span className="md:font-semibold text-base md:text-sm mb-6">
          You can test out all the OpenAI apis by just dropping in the API Key
        </span>
        <input className="h-10 mt-6 mb-4" type="text" name="apiKey" />
        <button className="mb-10">Submit</button>
        <a href="http://">
          <h3>How to get API Key?</h3>
        </a>
      </div>
    </>
  );
}
