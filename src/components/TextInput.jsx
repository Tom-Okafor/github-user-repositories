import { useContext } from "react";
import { InputContext } from "../context/inputContext";

export default function TextInput() {
  const { inputValue, setInputValue } = useContext(InputContext);
  return (
    <input
      list="github-users"
      type="text"
      placeholder="Please, enter github username."
      className="border-2 border-[#74fce4] rounded-lg w-[280px] sm:w-[300px] px-4 py-2 [box-shadow:0px_2px_8px_-1px_#999] focus:border-2.5 duration-300 focus:border-yellow-400 focus:outline-0 bg-transparent text-white flex-initial"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}
