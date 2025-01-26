import PropTypes from "prop-types";
export default function Language({color, language}) {
  return (
    <div className="flex space-x-4 items-center">
      <div
        className="size-[10px] rounded-full"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <p style={{ color: `${color}` }}>{language}</p>
    </div>
  );
}

Language.propTypes = {
    color: PropTypes.string,
    language: PropTypes.string,
}
