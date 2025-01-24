export default function Error() {
  return (
    <div className="flex flex-col items-center">
      <img className="h-[250px]" src="errorMonkey.gif" alt="crying monkey" aria-hidden="true"/>
      <h3 className="text-[#74fce4cc] max-w-[45ch] text-center">
        Sorry, we are unable to get details on this user. Please ensure you have
        entered a valid github user, or try removing any spaces between the
        names you provided. Thank you.
      </h3>
    </div>
  );
}
