import Input from '@/components/Input';
import { mockDietVal } from '@/utils/mockDiet';

const Diet = () => {
  return (
    <>
      <div className="flex flex-col items-center  gap-10 p-5">
        <Input
          label="Search calories "
          placeholder="e.g. 1 egg 2 medium bananas"
        />

        <div className="flex gap-2">
          {mockDietVal.map((item) => {
            return (
              <div
                key={item}
                className="text-white font-bold border-x-2 px-2 text-sm  flex"
              >
                {console.log(item)}
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Diet;
