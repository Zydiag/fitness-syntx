import axios from 'axios';

const fetcher = (url) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  }).then((res) => {
    console.log(process.env);
    console.log(res);
    return res.json();
  });

export default fetcher;
