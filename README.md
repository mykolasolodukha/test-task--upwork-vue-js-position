# Upwork Vue.js position | Test task

Let's say we have this website running on `www.example.com` and a separate API server running on `www.api.example.com`.
Your task is to create a simple integration to:

1. Allow for sign-in and sign-up using the API. The API has the following endpoints:
    - `POST /auth/sign-in`
    - `POST /auth/sign-up`
2. After authentication, the API responds with a JWT token. Store this token in the browser's local storage, so that the
   user remains authenticated for as long as the token is valid.
3. Whenever the request to the API returns a 401 status code, it means the token has expired. In this case, the user
   should be redirected to the sign-in page.

## Requirements

1. Create a PR to this repository with your solution. That's all. First to finish (with an adequate solution) wins.
