import PropTypes from "prop-types";
export default function Language({color, language}) {
  return (
    <div className="flex space-x-3 items-center">
      <div
        className="size-[10px] rounded-full"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <p style={{ backgroundColor: `${color}` }} className="px-4 py-1.5 rounded-full text-black font-[cursive]">{language}</p>
    </div>
  );
}

Language.propTypes = {
    color: PropTypes.string,
    language: PropTypes.string,
}
