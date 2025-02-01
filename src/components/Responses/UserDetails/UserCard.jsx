import { useState, useEffect } from "react";
import UserBioData from "./userBioData";
import AllRepositoryCards from "./AllRepositoryCards";
import useUserContext from "../../../hooks/useUserContext";

export default function UserCard() {
  const { avatarUrl, nodes, topNodes } = useUserContext();

  const [styles, setStyles] = useState({ classname: "", opacity: 0 });

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
        <div>
          <h3 className="text-2xl pt- pb-8 mt-8 text-yellow-500 capitalize tracking-[2px] font-bold">
            top repositories
          </h3>
          <AllRepositoryCards repositories={topNodes} />
        </div>
      )}

      {nodes.length > 0 && (
        <div>
          <h3 className="text-2xl pt- pb-8 mt-8 text-[#74fce4] capitalize tracking-[2px] font-bold">
            latest repositories
          </h3>
          <AllRepositoryCards repositories={nodes} />
        </div>
      )}
    </section>
  );
}
