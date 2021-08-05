import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const PokeDetail = () => {

    const { id } = useParams();
    const { data, error, isPending } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=9' )

    return (
        <div className="PokeDetail">

        </div>
      );
}
 
export default PokeDetail;