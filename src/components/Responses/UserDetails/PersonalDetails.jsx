import { useContext } from "react";
import { InputContext } from "../../../context/InputContext";
import useUserContext from "../../../hooks/useUserContext";

export default function PersonalDetails() {
  const { email, location, name, bio } = useUserContext();
  const { alternativeName } = useContext(InputContext);

  return (
    <>
      <p className="text-center text-lg sm:text-2xl tracking-[2px] text-yellow-400 font-semibold capitalize font-subhead">
        {name ? name : alternativeName}
      </p>
      <p className="max-w-[50ch] text-center leading-[1.4] text-[#aaa] font-main">
        {bio}
      </p>
      <p className="text-md sm:text-lg text-yellow-300 tracking-[2px] font-semibold font-subhead">
        <span>{email}</span> <span>{location}</span>
      </p>
    </>
  );
}
