const api = "http://192.168.100.3:8080/api";
const axios = require("axios");
export const CreateAsset = async (token,patientID,data) => {
  try {
    const res = await axios.post(api + "/asset", {id:patientID,data}, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const GetAssets = async (token,data) => {
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

