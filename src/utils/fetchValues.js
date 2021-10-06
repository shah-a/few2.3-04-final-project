/*
 * WARNING:
 * API keys here will be exposed in production builds.
 * For secure transactions, the api call needs to happen
 * on the backend. That functionality is not yet implemented
 * here.
 *
 * RESOURCES:
 * Random.org API docs: https://api.random.org/json-rpc/4/basic
 * Netlify functions docs: https://docs.netlify.com/functions/overview/
 * Vite .env file docs: https://vitejs.dev/guide/env-and-mode.html#env-files
 */

const fetchValues = async (arrayCount, arrayLength) => {
  const urlBase = 'https://api.random.org/json-rpc/4/invoke';
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    jsonrpc: '2.0',
    method: 'generateIntegerSequences',
    params: {
      apiKey: 'Your API key',
      n: arrayCount.toString(),
      length: arrayLength.toString(),
      min: '0',
      max: '500',
    },
    id: 0,
  });

  const res = await fetch(urlBase, { method, headers, body });

  if (!res.ok) {
    return [null, new Error(res.status)];
  }
  return [await res.json(), null];
};

export default fetchValues;
