const api = "http://192.168.100.3:8080/api";
const axios = require("axios");
const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvY3RvcjAxQGdtYWlsLmNvbSIsInJvbGUiOiJkb2N0b3IiLCJpZCI6ImYyMzcwMDQ3LTE2NWQtNGUyYS1hY2U0LWRlN2U1YjM1NjMzZiIsImlhdCI6MTY1NTYyODA3OCwiZXhwIjoxNjU2ODI4MDc4fQ.DC8qOHVwN9MOJ_wgyzGIBqPlVp8bpl9W7_YoB9bt6c4"
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
export const getPatientAsset = async (Usertoken,patient) => {
  try {
    const res = await axios.get(api + "/asset/hest/" + patient, {
      headers: {
        Authorization: Usertoken,
      },
    });
    console.log(res.data)
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
