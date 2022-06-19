const api = "http://192.168.100.3:8081/api";
export const AddAnalysis = async (token, PatientId, data) => {
  console.log(data,"fata")
  const response = await fetch(api + "/asset/" + PatientId, {
    headers: {
      Authorization: token,
    
    },
    method: "POST",
    body: JSON.stringify({image:data,record:"hello"}),
  });
  console.log(response);
};
