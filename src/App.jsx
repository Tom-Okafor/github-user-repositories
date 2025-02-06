import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { GET_USER_DETAILS, QUERY_STATES } from "./constants";
import Response from "./components/Responses/Response";
import { InputContext } from "./context/InputContext";
import Footer from "./components/Footer";
let alternativeName;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [getUserDetails, { loading, error, data }] =
    useLazyQuery(GET_USER_DETAILS);
  const handleSubmit = () => {
    inputValue && getUserDetails({ variables: { username: inputValue } });
    alternativeName = inputValue;
  };
  return (
    <div className="w-full min-h-lvh flex flex-col justify-center items-center gap-8 bg-gradient-to-tr from-slate-900 to-slate-700">
      <Logo />
      <h1 className="text-yellow-400 text-3xl  sm:text-5xl lg:text-6xl font-bold mt-[100px] font-head uppercase tracking-[3px] sm:tracking-[5px]">
        Github User
      </h1>

      <QUERY_STATES.Provider value={{ loading, error, data }}>
        <InputContext.Provider
          value={{ inputValue, setInputValue, alternativeName }}
        >
          <Form handleSubmit={handleSubmit} />
          <Response />
        </InputContext.Provider>
      </QUERY_STATES.Provider>

      <Footer />
    </div>
  );
}

export default App;
