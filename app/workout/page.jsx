'use client';

import useSWR from 'swr';
import Image from 'next/image';
import fetcher from '@/utils/fetcher';
import Input from '@/components/Input';
import Dropdown from '@/components/Dropdown';
import { useState } from 'react';
import { mydata } from '@/utils/data';

const Workout = () => {
  const [muscleType, setMuscleType] = useState('');
  const url = Boolean(muscleType)
    ? `https://exercisedb.p.rapidapi.com/exercises/target/${muscleType}?limit=10`
    : 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
  // const { data, error } = useSWR(url, fetcher);
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-5">
      <div className="flex gap-10 items-center justify-center w-full">
        <Input label="Search" />
        <Dropdown onChange={(e) => setMuscleType(e.target.value)} />
        {console.log(muscleType)}
      </div>

      <div className="grid grid-cols-3 grid-flow-row justify-start gap-5 min-h-screen">
        {mydata &&
          mydata.map((item) => (
            <div key={item.id} className="flex shadow-md rounded-lg shadow-secondary ">
              <div className=" flex-col justify overflow-hidden rounded-lg">
                <div className="overflow-hidden">
                  <Image
                    className=" rounded-t-lg shadow shadow-accent hover:opacity-60 transition-all duration-300 hover:scale-105 overflow-hidden"
                    src={item.gifUrl}
                    alt="image"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="bg-accent h-20  text-white   border-x-2 border-b-2 shadow shadow-accent w-[300px] p-2 capitalize rounded-b-lg">
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
