const api = "http://192.168.100.3:8080/api/auth/login";
const axios = require("axios");
export const LogUser = async (data) => {
  try {
    const res = await axios.post(api, data);
    return res
  } catch (e) {
    console.error("error", e);
  }
};
