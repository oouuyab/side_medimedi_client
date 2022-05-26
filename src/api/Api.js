import axios from 'axios';

export const search = async (keyword) =>
  await axios({
    method: 'GET',
    url: SERVER_HOST + `/medi/search?keyword=${keyword}`,
  });

export const searchDURInfo = async (combinations) =>
  await axios({
    method: 'POST',
    url: SERVER_HOST + `/medi/search/dur`,
    data: combinations,
  });
