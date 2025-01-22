function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-yellow-400 text-5xl font-bold font-serif">
        Github User
      </h1>
      <form className="space-x-4">
        <input
          type="text"
          placeholder="Please, enter github username."
          className="border-2 border-teal-600 rounded-lg w-[300px] px-4 py-2 [box-shadow:0px_2px_8px_-1px_#999] focus:border-2.5 duration-300 focus:border-yellow-600 focus:outline-0"
        />
        <input
          type="submit"
          value="Get Info"
          className="border-2 border-teal-600 [box-shadow:0px_2px_8px_-1px_#999] rounded-xl px-3 py-2 text-yellow-500 font-serif hover:border-yellow-600 hover:text-teal-900 duration-300"
        />
      </form>
    </div>
  );
}

export default App;
