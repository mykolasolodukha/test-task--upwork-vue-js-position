import { ref } from 'vue'
import useFetch from './useFetch'
import { useRouter } from 'vue-router'


export default function useAuth() {
	const TOKEN_KEY = 'access_token'
	const router = useRouter()
	const isLoading = ref(false)

	const isAuthenticated = () => {
		const token = localStorage.getItem(TOKEN_KEY);
		return !!token;
	};

	const removeToken = () => {
		localStorage.removeItem(TOKEN_KEY);
	}

	const getToken = () => {
		return localStorage.getItem(TOKEN_KEY);
	};

	const setToken = (token) => {
    	return localStorage.setItem(TOKEN_KEY, token);
	};
	
	async function signIn(email, password) {
		const { result, error } = await useFetch('/auth/sign-in', 'POST', { email, password })

		if (!result.ok) {
			if (result.status === 401) {
				router.push('/authentication/signin/basic')
				throw new Error('Token expired.')
			}
			throw new Error(error)
		}

		const token = result.data.token;
		setToken(token)

		return result
	}

	async function signUp(email, password) {
		const { result, error } = await useFetch('/auth/sign-up', 'POST', { email, password })
		if (!result.ok) {
			// return error
			throw new Error(error)
		}

		const token = result.data.token;
		setToken(token)

		return result
	}

	return { isAuthenticated, getToken, signIn, signUp }
}