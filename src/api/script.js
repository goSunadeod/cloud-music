const axios = require("axios");

export const baseUrl = 'http://localhost:3030';

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});


axiosInstance.interceptors.response.use(res => res.data, err => {
  console.log(err, "网络错误");
})
let obj = {};

const getRankNames = async () => {
  for (let i = 0; i < 24; i++) {
    await axiosInstance.get(`/top/list?idx=${i}`).then(data => {
      obj[i] = data.playlist.name;
    })
  }
  console.log(obj);
}

getRankNames();