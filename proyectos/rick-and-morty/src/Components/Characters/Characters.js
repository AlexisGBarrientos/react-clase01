import { useFetch, useState } from "./Components/CustomHooks/useFetch";
import { Row } from "react-bootstrap";
import Character from "./Character";
import Loading from "./Components/Loading";

const Characters = () => {
    const [data, fetching] = useFetch("character");
    const {info, results: characters} = data;
    return ( 
        <>
            <Row className="">
                { fetching 
                ?
                (<Loading/>) 
                :
                (characters.map( (character) => 
                    <Character key={character.id} {...character} />
                ))

                }
            </Row>
        </>
    );
}
 
export default Characters;