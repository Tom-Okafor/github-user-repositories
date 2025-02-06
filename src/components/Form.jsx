import PropTypes from "prop-types";
import Datalist from "./Datalist";
import TextInput from "./TextInput";
import SubmitInput from "./SubmitInput";

export default function Form({ handleSubmit }) {
  return (
    <form
      className="flex gap-6 flex-col mb:flex-row justify-center items-center w-full font-main"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextInput />
      <SubmitInput />
      <Datalist />
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
};
