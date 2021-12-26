import axios from "axios";

const url = `http://localhost:8080/`;

const accessToken = "GET ACCESS_TOKEN";

export const interceptor = axios.create({
  baseUrl: url,
  headers: {
    Authorization: accessToken,
  },
});

//do request like this
// interceptor.post('/',post_data)
