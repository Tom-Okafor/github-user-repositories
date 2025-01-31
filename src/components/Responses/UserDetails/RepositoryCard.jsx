import PropTypes from "prop-types";
import Language from "./Language";

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
    <div className="rounded-2xl shadow-[0_0_8px_#74fce4ae] px-8 py-8 text-white relative flex gap-5 repobox bg-slate-800 border-box">
      <svg
        height="50px"
        width="50px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        className="shrink-0"
      >
        <circle
          className="has-repobox:even:fill-pink-600 has-repobox:odd:fill-yellow-400 circle"
          cx="256"
          cy="256"
          r="256"
        />
        <g className="g">
          <path
            d="M213.12,319.776L99.872,270.544V243.28l113.248-49.008v32.112l-79.008,30.208l79.008,31.328V319.776
		z"
          />
          <path d="M223.6,341.408l40.912-170.832h23.776l-41.36,170.832H223.6z" />
          <path d="M298.768,319.904V288l79.104-31.104l-79.104-30.752V194.48l113.36,49.008v27.04L298.768,319.904z" />
        </g>
      </svg>
      <ul className="font-serif space-y-[20px] w-full">
        <li className="flex justify-between">
          <span className="capitalize name font-bold text-lg">
            {name.split("-").join(" ")}
          </span>
          <span> {new Date(date).toDateString()}</span>
        </li>
        <li className="max-w-[40ch]">{description}</li>
        <li className="stars py-2 px-6 bg-[#00000033] w-fit rounded-xl shadow-[inset_0_0_7px_#ccc]">
          <span className="border-r-2 pr-4 capitalize">{forks} forks</span> <span className="pl-4 capitalize">{stars} stars</span>
        </li>
        <li className="flex gap-6 flex-wrap">
          {languages.map(({ name, color, id }) => {
            return <Language color={color} language={name} key={id} />;
          })}
        </li>
        <li>
          <a href={url} className="group p-1 font-bold relative" target="_blank" rel="noopener noreferrer">
            view repository
            <div className="absolute w-0 h-[2px] bg-white -bottom-2 left-0  group-hover:w-full duration-300"></div>
          </a>
        </li>
      </ul>
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
