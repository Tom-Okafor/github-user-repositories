export default function Error() {
  return (
    <div className="flex flex-col items-center">
      <img className="h-[250px]" src="errorMonkey.gif" alt="crying monkey" aria-hidden="true"/>
      <h3 className="text-[#74fce4cc] max-w-[40ch] sm:max-w-[50ch] text-center font-main px-4 pb-8 pt-4">
        Sorry, we are unable to get details on this user. Please, check your network connection and ensure you have
        entered a valid github user. Thank you.
      </h3>
    </div>
  );
}
