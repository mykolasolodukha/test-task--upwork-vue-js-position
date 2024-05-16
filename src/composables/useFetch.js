import { ref } from 'vue'

export default async function useFetch(url, method = 'GET', data = {}) {
	const REQUEST_URL = `https://www.api.example.com${url}`
	const result = ref(null)
	const error = ref(null)

	await fetch(REQUEST_URL, {
		method: method,
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
  	})
    .then((res) => res.json())
    .then((json) => (result.value = json))
    .catch((err) => (error.value = err))

  return { result, error }
}