import { targetList } from '@/utils/targetList';

const Dropdown = ({ onChange }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="muscles"
        className="block mb-2 text-sm font-medium text-white "
      >
        Select an option
      </label>
      <select
        onChange={onChange}
        id="muscles"
        className="bg-gray-50 text-sm rounded-lg outline-none block w-96 p-2.5  "
      >
        <option value="">Choose a muscle</option>
        {targetList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
