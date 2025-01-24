import { QUERY_STATES } from "../../constants";
import { useContext } from "react";
import Loading from "./Loading";

export default function Response() {
    const {loading, error, data} = useContext(QUERY_STATES)
    return <Loading loading={loading} />
}
