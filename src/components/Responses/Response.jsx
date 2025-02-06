import { QUERY_STATES } from "../../constants/index";
import { useContext } from "react";
import Loading from "./Loading";
import Error from "./Error";
import UserCard from "./UserDetails/UserCard";

export default function Response() {
  const { loading, error, data } = useContext(QUERY_STATES);
  return (
    <div>
      {loading ? (
        <Loading loading={loading} />
      ) : error ? (
        <Error />
      ) : (
        data && <UserCard />
      )}
    </div>
  );
}
