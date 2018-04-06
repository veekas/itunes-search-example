var axios = require('axios');

const searchiTunes = query => {
  const encodedQuery = encodeURIComponent(query);
  const url = 'https://itunes.apple.com/search?term=' + encodedQuery + '&media=music&entity=album';
  return axios.get(url)
    .then(res => res.data.results)
    .catch(err => new Error(err.data));
}

module.exports = searchiTunes;
