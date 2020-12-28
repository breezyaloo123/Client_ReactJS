import React from 'react';

const List = (props) => {
    const {repos} = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry!!!</p>;
    return (
        <ul>
            <h2 className='list-head'>La Liste des Produits</h2>
            {
                repos.map((repo) =>{
                    return (
                        <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.nom} </span>
            <span className='repo-description'>{repo.prix} </span>
            <span className='repo-description1'>{repo.quantite}</span>
          </li>
                    );
                })
            }
        </ul>
    );
};

export default List;


