const api = "http://192.168.100.3:8080/api";
const axios = require("axios");

export const CreateUser = async (token,data) => {
  try {
    const res = await axios.post(api + "/user", data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const GetUsers = async (token) => {
  try {
    const res = await axios.get(api + "/user", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const DeleteUser = async (token,data) => {
  try {
    const res = await axios.delete(api + "/user", {
      headers: {
        Authorization: token,
      },
      data
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
