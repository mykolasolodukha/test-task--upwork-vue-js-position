export default [
  {
    url: "/api/v1/auth/sign-in",
    method: "post",
    response: () => {
      return {
        status: 200,
        data: {
          tokens: {
            accessToken:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MzQwNjYwNjYsImV4cCI6MTYzNDA2NjA2Nn0.1Vv0hYR2fF9tZ9f2QWtJ8y1t6J9gZx5q3kKl8z8z2bE",
            refreshToken:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MzQwNjYwNjYsImV4cCI6MTYzNDA2NjA2Nn0.1Vv0hYR2fF9tZ9f2QWtJ8y1t6J9gZx5q3kKl8z8z2bE"
          }
        }
      };
    }
  },
  {
    url: "/api/v1/auth/sign-up",
    method: "post",
    response: () => {
      return {
        status: 200,
        data: {
          message: "Sign up successfully"
        }
      };
    }
  },
  {
    url: "/api/v1/auth/sign-out",
    method: "post",
    response: () => {
      return {
        status: 200,
        data: {
          message: "Sign out successfully"
        }
      };
    }
  },
  {
    url: "/api/v1/auth/get-user-info",
    method: "get",
    response: () => {
      // return {
      //   status: 200,
      //   data: {
      //     id: 1,
      //     name: "admin",
      //     email: "123@gmail.com",
      //     role: "admin"
      //   }
      // };
      return {
        status: 401,
        message: "Token expired, please login again."
      };
    }
  }
];
