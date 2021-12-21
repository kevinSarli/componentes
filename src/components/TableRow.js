import React from 'react';

const Tablerow = ({title,length,rating,genres,awards}) => {
    return (
        <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>
            <ul>
                {genres.map((genre,index) => <li key={genre + index}>{genre}</li>)}
            </ul>
        </td>    
        <td>{awards}</td>
      </tr>
    );
}

export default Tablerow;