import { useContext } from "react";
import { InputContext } from "../context/InputContext";

export default function TextInput() {
  const { inputValue, setInputValue } = useContext(InputContext);
  return (
    <input
      list="github-users"
      type="text"
      placeholder="Enter github username."
      className="border-2 border-[#74fce4] rounded-lg px-3 py-3 w-[250px] sm:w-[350px] [box-shadow:0px_2px_8px_-1px_#999] focus:border-2.5 duration-300 focus:border-yellow-400 focus:outline-0 bg-transparent text-white"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}
