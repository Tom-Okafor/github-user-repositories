import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { GET_USER_DETAILS } from "./constants";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [getUserDetails, { loading, error, data }] =
    useLazyQuery(GET_USER_DETAILS);
  const handleSubmit = () => {
    getUserDetails({ variables: { username: inputValue } });
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8 bg-slate-900">
      <Logo />
      <h1 className="text-yellow-400 text-5xl font-bold font-serif">
        Github User
      </h1>
      <Form
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
        data={data}
      />
    </div>
  );
}

export default App;
