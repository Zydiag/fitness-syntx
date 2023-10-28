'use client'

import useSWR from 'swr'
import Image from 'next/image';
import fetcher from '@/utils/fetcher';

const Workout = () => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
  const { data, error } = useSWR(url, fetcher);
  console.log(data)
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.gifUrl}
              alt="image"
              height={300}
              width={300}
            ></Image>
            {console.log(item.gifUrl)}
          </div>
        ))}
    </div>
  );
};
export default Workout;
