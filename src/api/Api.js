import axios from 'axios';

export const search = async (keyword) =>
  await axios({
    method: 'GET',
    url: `/api/medi/search?keyword=${keyword}`,
  });

export const searchDURInfo = async (params) =>
  await axios({
    method: 'POST',
    url: '/api/medi/search/dur',
    data: params,
  });
