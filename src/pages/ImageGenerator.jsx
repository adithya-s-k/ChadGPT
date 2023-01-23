import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './ImageGenerator.css';
import Cookies from 'js-cookie';

function App() {
  const api = Cookies.get('api');

  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    'Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..'
  );
  const configuration = new Configuration({
    apiKey: api,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    try {
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: '512x512',
      });
      setLoading(false);
      setResult(res.data.data[0].url);
    } catch (error) {
      setLoading(false);
      setPlaceholder('Something went wrong..');
      toast('Something went wrong..', { error });
    }
    setLoading(false);
    setResult(res.data.data[0].url);
  };
  return (
    <div className="app-main">
      {loading ? (
        <>
          <h2>Generating..Please Wait..</h2>
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2>Generate an Image using Open AI API</h2>

          <textarea
            className="text-area"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
          <button onClick={generateImage}>Generate an Image</button>
          {result.length > 0 ? (
            <img className="result-image" src={result} alt="result" />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default App;
