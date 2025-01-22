import PropTypes from "prop-types";

export default function Form({
  handleSubmit,
  setInputValue,
  inputValue,
  data,
}) {
  return (
    <form
      className="space-x-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        console.log(data);
      }}
    >
      <input
        type="text"
        placeholder="Please, enter github username."
        className="border-2 border-[#74fce4] rounded-lg w-[300px] px-4 py-2 [box-shadow:0px_2px_8px_-1px_#999] focus:border-2.5 duration-300 focus:border-yellow-400 focus:outline-0 bg-transparent text-white"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <input
        type="submit"
        value="Get Info"
        className="border-2 border-[#74fce4] [box-shadow:0px_2px_8px_-1px_#999] rounded-xl px-3 py-2 text-yellow-400 font-serif hover:border-yellow-400 hover:text-[#74fce4] duration-300 cursor-pointer"
      />
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  setInputValue: PropTypes.func,
  inputValue: PropTypes.string,
  data: PropTypes.object,
};
