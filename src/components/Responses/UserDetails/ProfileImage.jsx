import useUserContext from "../../../hooks/useUserContext";

export default function ProfileImage() {
  const { avatarUrl } = useUserContext();
  return (
    <div className="image size-[200px] sm:size-[250px] bg-yellow-400 flex justify-center items-center rounded-full relative overflow-hidden hover:shadow-[0px_0px_20px_#35fd74,0px_10px_40px_#ec407a,0px_0px_60px_#ffeb3b] duration-500">
      <img
        src={avatarUrl}
        alt="user profile"
        className="w-[93%] h-[93%] rounded-full z-40 bg-black"
      />
    </div>
  );
}
