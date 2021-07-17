import React from 'react'

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { pokemonid } = params;
    return(
        <div>
            This is de pokemon page for pokemon#${pokemonid}
        </div>
    )
};
export default Pokemon