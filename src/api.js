const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  works: {
    list() {
      return callApi('/works');
    },
    create(work) {
      return callApi(`/works`, {
        method: 'POST',
        body: JSON.stringify(work),
      });
    },
    read(workId) {
      return callApi(`/works/${workId}`);
    },
    update(workId, updates) {
      return callApi(`/works/${workId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(workId) {
      return callApi(`/works/${workId}`, {
        method: 'DELETE',
      });
    },
  },
  areas: {
    list() {
      return callApi('/areas');
    },
    create(areas) {
      return callApi(`/areas`, {
        method: 'POST',
        body: JSON.stringify(areas),
      });
    },
    read(areasId) {
      return callApi(`/areas/${areasId}`);
    },
    update(areasId, updates) {
      return callApi(`/areas/${areasId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(areasId) {
      return callApi(`/areas/${areasId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
