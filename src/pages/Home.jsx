import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [apiInput, setApiInput] = useState('');
  const navigate = useNavigate();
  const storeKey = () => {
    Cookies.set('api', `${apiInput}`, { expires: 1 });
    // const cookie = Cookies.get('api');
    // console.log(cookie);
    navigate('/select');
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="md:font-semibold text-base md:text-4xl my-3">
          Welcome to the Open AI API Demo
        </h1>
        <span className="md:font-semibold text-base md:text-sm mb-6">
          You can test out all the OpenAI apis by just dropping in the API Key
        </span>
        <input
          className="h-10 mt-6 mb-4"
          type="text"
          name="apiKey"
          onChange={(e) => setApiInput(e.target.value)}
        />
        <button className="mb-10" onClick={storeKey}>
          Submit
        </button>
        <a
          href="https://www.educative.io/answers/how-to-get-api-key-of-gpt-3"
          target="_blank"
        >
          <h3>How to get API Key?</h3>
        </a>
      </div>
    </>
  );
}
