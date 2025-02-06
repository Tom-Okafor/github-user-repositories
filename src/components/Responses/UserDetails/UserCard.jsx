import { useState, useEffect } from "react";
import UserBioData from "./userBioData";
import AllRepositoryCards from "./AllRepositoryCards";
import useUserContext from "../../../hooks/useUserContext";

export default function UserCard() {
  const { avatarUrl, nodes, topNodes } = useUserContext();

  const [styles, setStyles] = useState({ classname: "", opacity: 0 });

  const sectionTitleClass =
    "capitalize tracking-[2px] font-bold text:lg sm:text-2xl pt- pb-8 mt-8 font-subhead";

  useEffect(() => {
    setStyles({ classname: "card-holder", opacity: 0 });
    setTimeout(() => {
      setStyles({ classname: "", opacity: 1 });
    }, 2000);
  }, [avatarUrl]);

  return (
    <section
      className={`py-8 text-white max-w-[600px] w-[80vw] ${styles.classname}`}
      style={{ opacity: styles.opacity }}
    >
      <UserBioData />
      {topNodes.length > 0 && (
        <div aria-labelledby="top-repositories-title">
          <h3
            className={`${sectionTitleClass} text-yellow-500`}
            id="top-repositories-title"
          >
            top repositories
          </h3>
          <AllRepositoryCards repositories={topNodes} />
        </div>
      )}

      {nodes.length > 0 && (
        <div aria-labelledby="latest-repositories-title" className="mb-[100px]">
          <h3
            className={`${sectionTitleClass} text-[#74fce4]`}
            id="latest-repositories-title"
          >
            latest repositories
          </h3>
          <AllRepositoryCards repositories={nodes} />
        </div>
      )}
    </section>
  );
}
