import PropTypes from "prop-types";
import Language from "./Language";
import CodeSvg from "./CodeSvg";

export default function RepositoryCard({
  name,
  description,
  stars,
  forks,
  languages,
  url,
  date,
}) {
  return (
    <div className="repoparent">
      <div className="repobox rounded-2xl shadow-[0_0_8px_#74fce4ae] px-8 py-8 text-white relative flex flex-col items-center sm:flex-row gap-5 bg-slate-800 border-box hover:shadow-[0_0_50px_#74fce4ae,0_0_50px_#74fce4ae,0_0_50px_#74fce49e] duration-500">
        <CodeSvg />
        <ul className="space-y-[20px] w-full">
          <li className="flex sm:flex-row flex-col sm:justify-between text-center space-y-[5px] font-subhead">
            <span className="capitalize name font-bold text-lg">
              {name.split("-").join(" ")}
            </span>
            <span> {new Date(date).toDateString()}</span>
          </li>
          <li className="max-w-prose sm:max-w-[40ch] text-center sm:text-left font-subhead tracking-[1.5px]">
            {description}
          </li>
          <li className="stars py-2 px-4 mx-auto sm:mx-0 sm:px-6 bg-[#00000033] w-fit rounded-xl shadow-[inset_0_0_7px_#ccc] flex sm:block font-main">
            <span className="border-r-2 pr-4 capitalize">{`${forks} ${
              forks > 1 ? "forks" : "fork"
            }`}</span>{" "}
            <span className="pl-4 capitalize slashed-zero">{`${stars} ${
              stars > 1 ? "stars" : "star"
            }`}</span>
          </li>
          <li className="flex gap-6 flex-wrap justify-center sm:justify-start mbb-2">
            {languages.map(({ name, color, id }) => {
              return <Language color={color} language={name} key={id} />;
            })}
          </li>
          <li className="text-center sm:text-left font-main tracking-[2px]">
            <a
              href={url}
              className="group p-1 font-bold relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              view repository
              <div className="absolute w-0 h-[2px] bg-white -bottom-2 left-0  group-hover:w-full duration-300"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

RepositoryCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
  languages: PropTypes.array,
  url: PropTypes.string,
  date: PropTypes.string,
};
