import React from 'react';
import ContentrowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastmovieInDb from './LastMovieInDb';

const ContentRowTop = () => {

    let data = [
        {
            title: "Movies in Data Base",
            color: 'primary',
            amount: 21,
            icon: 'fa-film'
        },
        {
            title: "Total awards",
            color: 'success',
            amount: 79,
            icon: 'fa-award'
        },
        {
            title: "Actors quantity",
            color: 'warning',
            amount: 49,
            icon: 'fa-user'
        },
    ];


    return (
        <div className="Container-fluid">
            <div className="d-sm-flex align-items-center justify-content-betweenmb-4">
                <h1 className='h3 mb-0 text-gray-800'>App Dashboard</h1>
            </div>

            <div className='row'>
                {
                    data.map((item, i) => {
                        return <ContentrowMovies
                            key={item.title + i}
                            title={item.title}
                            color={item.color}
                            amount={item.amount}
                            icon={item.icon} />

                    })
                }

            </div>


            <div className='row'>
                <LastmovieInDb />

                <GenresInDb />
            </div>
        </div>
    );
}

export default ContentRowTop;