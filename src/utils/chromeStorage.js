const { chrome } = window;

function handlePromise({ resolve, reject, data }) {
  const { lastError } = chrome.runtime;
  if (lastError) reject(lastError);
  else resolve(data);
}

async function get({ key }) {
  const promise = new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (data) => {
      handlePromise({ resolve, reject, data });
    });
  });

  const result = await promise;
  return result;
}

async function set({ keyValueMap }) {
  const promise = new Promise((resolve, reject) => {
    chrome.storage.sync.set(keyValueMap, (data) => {
      handlePromise({ resolve, reject, data });
    });
  });

  const result = await promise;
  return result;
}

async function remove({ keyList }) {
  const promise = new Promise((resolve, reject) => {
    chrome.storage.sync.remove(keyList, (data) => {
      handlePromise({ resolve, reject, data });
    });
  });

  const result = await promise;
  return result;
}

export { get, set, remove };
