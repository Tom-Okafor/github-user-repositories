import { QUERY_STATES } from "../../constants";
import { useContext } from "react";
import Loading from "./Loading";
import Error from "./Error";
import UserCard from "./UserDetails/UserCard";

export default function Response() {
  const { loading, error, data } = useContext(QUERY_STATES);
  return (
    <>
      {loading ? <Loading loading={loading} /> : error && <Error />}
      <UserCard />
    </>
  );
}
