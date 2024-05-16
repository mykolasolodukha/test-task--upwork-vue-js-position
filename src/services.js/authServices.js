import axios from 'axios'

export async function loginUser(email, password) {   
  try {
    // Simulate API call to authenticate user
    const response = await axios.post('https://dummyjson.com/auth/login', {
     username: email,
     password: password
    })
    console.log("RESPONSE ", response)
    // Assuming your mock API returns user data and an access token
    const userData = response.data
    const accessToken = response.data.token
    
    // Store user data and access token in local storage
    if(userData && accessToken){
        localStorage.setItem("userData", JSON.stringify(userData))
        localStorage.setItem("accessToken", accessToken)
    }
    return userData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export function logoutUser() {
    try {
      // Remove user data and access token from local storage
      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.error("Error while logging out:", error);
      throw error;
    }
  }
