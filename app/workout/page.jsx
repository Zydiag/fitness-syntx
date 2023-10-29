'use client';

import useSWR from 'swr';
import Image from 'next/image';
import fetcher from '@/utils/fetcher';
import Dropdown from '@/components/Dropdown';
import { useState } from 'react';
import { mydata } from '@/utils/data';
import { useFetch } from '@/hooks/useFetch';

const Workout = () => {
  const [muscleType, setMuscleType] = useState('');
  const [searchField, setSearchField] = useState('');
  const [searchData, setSearchData] = useState([]);
  const url = Boolean(muscleType)
    ? `https://exercisedb.p.rapidapi.com/exercises/target/${muscleType}?limit=10`
    : 'https://exercisedb.p.rapidapi.com/exercises?limit=10';

  const searchUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchField}?limit=10`;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };
  const { data: search, error: searchError } = useFetch(
    `exercises/bodyPart${searchField}`
  );

  const { data, error } = useSWR(url, fetcher);
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-5">
      <div className="flex gap-10 items-center justify-center w-full">
        <Dropdown onChange={(e) => setMuscleType(e.target.value)} />
      </div>
      <div className="grid grid-cols-3 grid-flow-row justify-start gap-5 min-h-screen">
        {data &&
          data.map((item) => (
            <div key={item.id} className="flex  rounded-lg  ">
              <div className="">
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    className=" rounded-t-lg shadow border-light border-t-2 border-x-2 shadow-accent hover:opacity-60 transition-all duration-300 hover:scale-105 overflow-hidden"
                    src={item.gifUrl}
                    alt="image"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="bg-gradient-to-b from-green-900 to-secondary h-20 text-center   text-white border-light   w-[300px] p-2 capitalize rounded-b-lg">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Workout;
