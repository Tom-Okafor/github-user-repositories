import PropTypes from "prop-types";
import { QUERY_STATES } from "../constants";
import { useContext } from "react";

export default function Form({ handleSubmit, setInputValue, inputValue }) {
  const { loading, data, error } = useContext(QUERY_STATES);
  return (
    <form
      className="flex gap-6 flex-col sm:flex-row justify-center items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        console.log(data, error, loading);
      }}
    >
      <input
        type="text"
        placeholder="Please, enter github username."
        className="border-2 border-[#74fce4] rounded-lg w-[280px] sm:w-[300px] px-4 py-2 [box-shadow:0px_2px_8px_-1px_#999] focus:border-2.5 duration-300 focus:border-yellow-400 focus:outline-0 bg-transparent text-white flex-initial"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <input
        type="submit"
        value="Get Details"
        className="border-2 border-[#74fce4] [box-shadow:0px_2px_8px_-1px_#999] rounded-xl px-3 py-2 text-yellow-400 font-serif hover:border-yellow-400 hover:text-[#74fce4] duration-300 cursor-pointer grow-0 w-[150px] flex-initial"
      />
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  setInputValue: PropTypes.func,
  inputValue: PropTypes.string,
};
