import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b314946a31mshce2a65ca3dc222ap1df6fbjsndd25d3253e62',
            'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    // console.log(main_data)
    // console.log(main_data[0].jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem,id) => {
                                return <MovieCard key={id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;