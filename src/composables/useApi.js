import { computed, ref } from "vue";
import baseApi from "../lib/axios";
import { useRouter } from "vue-router";

const params_ = ref(null);
export default function useApi() {
  const token = computed(() => localStorage.getItem("access-token")); // Get the token from localStorage
  const loading = ref(false); // Initialize a loading ref

  const router = useRouter();

  async function requestData(
    method,
    endpoint,
    { data = null, params = params_, isFile = false } = {}
  ) {
    try {
      loading.value = true; // Set loading to true before making the request

      let response;
      switch (method.toUpperCase()) {
        case "GET":
          response = await baseApi.get(endpoint, {
            params: params.value,
            headers: {
              Authorization: token.value ? `Bearer ${token.value}` : "",
            },
          });
          break;
        case "POST":
          response = await baseApi.post(
            endpoint,
            data,

            {
              params: params.value,
              headers: {
                Authorization: token.value ? `Bearer ${token.value}` : "",
                "Content-Type": isFile
                  ? "multipart/form-data"
                  : "application/json",
              },
            }
          );
          break;
        case "PUT":
          response = await baseApi.put(
            endpoint,
            data,

            {
              params: params.value,
              headers: {
                Authorization: token.value ? `Bearer ${token.value}` : "",
                "Content-Type": isFile
                  ? "multipart/form-data"
                  : "application/json",
              },
            }
          );
          break;
        case "DELETE":
          response = await baseApi.delete(
            endpoint,

            {
              headers: {
                Authorization: token.value ? `Bearer ${token.value}` : "",
              },
            }
          );
          break;

        default:
          throw new Error(`Unsupported request method: ${method}`);
      }
      return response.data;
    } catch (error) {
      // If the response status is 401, remove the token from localStorage and redirect to the login page
      if (error.response.status === 401) {
        localStorage.removeItem("access-token");
        router.push("/auth/signin/basic");
      }
      return error;
    } finally {
      loading.value = false; // Set loading to false after request is completed
    }
  }

  return {
    requestData,
    loading, // Expose the loading ref
  };
}
