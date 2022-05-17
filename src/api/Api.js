import axios from 'axios';

export const search = async (keyword) =>
  axios({
    method: 'GET',
    url: process.env.SERVER_HOST + `/api/medi/search?keyword=${keyword}`,
  });
