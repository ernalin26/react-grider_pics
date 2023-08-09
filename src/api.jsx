import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 1Ta5sJptroKvrA_PTwt_5-hR2A2HtyEQ-ZRK0MJt56o',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;