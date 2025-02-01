import useUserContext from "../../../hooks/useUserContext";
import { InputContext } from "../../../context/inputContext";
import { useContext, useState, useCallback } from "react";

export default function UserBioData() {
  const {
    avatarUrl,
    name,
    bio,
    location,
    followers,
    following,
    email,
    url,
    totalCount,
  } = useUserContext();
  const { alternativeName } = useContext(InputContext);

  

  const [circleProperties, setCircleProperties] = useState({
    x: null,
    y: null,
    display: "none",
  });

  const { x, y, display } = circleProperties;

  const handlePointerEntersLink = useCallback((event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const x = `${offsetX - 15}px`;
    const y = `${offsetY - 15}px`;
    setCircleProperties((prev) => {
      return { ...prev, x, y, display: "block" };
    });
  }, []);

  const handlePointerLeavesLink = useCallback(() => {
    setCircleProperties((prev) => {
      return { ...prev, display: "none" };
    });
  }, []);

  return (
    <div className="py-8 flex flex-col gap-4 items-center">
      <div className="image size-[250px] bg-yellow-400 flex justify-center items-center rounded-full relative overflow-hidden hover:shadow-[0px_0px_20px_#35fd74,0px_10px_40px_#ec407a,0px_0px_60px_#ffeb3b] duration-500">
        <img
          src={avatarUrl}
          alt="user profile"
          className="w-[93%] h-[93%] rounded-full z-40 bg-black"
        />
      </div>

      <p className="text-center text-2xl tracking-[2px] text-yellow-400 font-semibold capitalize">
        {name ? name : alternativeName}
      </p>
      <p className="max-w-[50ch] text-center leading-[1.4] text-[#aaa]">
        {bio}
      </p>
      <p className="text-lg text-yellow-300 tracking-[2px] font-semibold">
        <span>{email}</span> <span>{location}</span>
      </p>

      <ul className="flex pt-8 pb-8 justify-center *:px-10 *:flex *:flex-col *:items-center *:capitalize *:gap-1.5 bg-slate-800 rounded-xl my-8 outline outline-2 outline-[#ec407a] outline-offset-[5px] shadow-[inset_0px_6px_6px_#ffffff99,inset_0px_0px_6px_#ffffff99] hover:shadow-[inset_0px_6px_6px_#ffffff99,inset_0px_0px_6px_#ffffff99,0px_0px_20px_#ec407a,0px_0px_20px_#ec407a,0px_0px_20px_#ec407a] hover:outline-none duration-300">
        <li>
          <span>{followers}</span> <span className="">followers</span>
        </li>
        <li className="border-l-2 border-r-2 border-[#ec407a] rounded-full">
          <span>{following}</span> <span>follwing</span>
        </li>
        <li className="">
          <span>{totalCount}</span> <span>total repositories</span>
        </li>
      </ul>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 py-3 rounded-full text-center tracking-[1.5px] font-semibold font-serif bg-[#ec407a] hover:bg-sky-500 hover:shadow-[0_0_15px_#00e5ff,0_0_15px_#00e5ff,0_0_15px_#00e5ff] relative overflow-hidden z-[1] duration-500"
        onPointerMove={(event) => {
          handlePointerEntersLink(event);
        }}
        onPointerOut={handlePointerLeavesLink}
      >
        <span style={{ zIndex: 1 }}>Visit Github Page</span>
        <span
          style={{
            position: "absolute",
            display,
            top: y,
            left: x,
            height: "60px",
            width: "60px",
            backgroundColor: "#35fd74",
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "all 150ms ease",
            zIndex: -1,
            filter: "blur(12px)",
            mixBlendMode: "overlay",
          }}
        ></span>
      </a>
    </div>
  );
}
