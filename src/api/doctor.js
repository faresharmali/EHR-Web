const api = "http://192.168.100.3:8080/api";
const axios = require("axios");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvY3RvcjAyQGdtYWlsLmNvbSIsInJvbGUiOiJkb2N0b3IiLCJpZCI6IjU1NGVjMTYyLWI3NTctNDM3Ni04ZGFkLTc3NDRjMTEzNGY1YSIsImlhdCI6MTY1NTM2MzM0MiwiZXhwIjoxNjU2NTYzMzQyfQ.WPDhXswd9YAa06VySZXRM6DvG7az4G6wVycciKef1Ok";

export const getPatients = async (data) => {
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
export const getPatientAsset = async (patient) => {
  console.log(patient);
  try {
    const res = await axios.get(api + "/asset/hest/" + patient, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
