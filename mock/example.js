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
  }
];
