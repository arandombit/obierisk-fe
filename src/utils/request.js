const json = res => res.ok ? res.json() : Promise.reject(new Error(res.statusText))

export default {
  get: (url, headers = {}) => fetch(url, headers).then(json)
}
