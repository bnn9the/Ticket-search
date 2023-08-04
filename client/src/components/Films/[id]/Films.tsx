'use client'
import classnames from 'classnames'
import {itemFilm, title, genre, descr, lSide, filmImg} from './styles.module.scss'
import { Dispatch, FunctionComponent, SetStateAction, useEffect } from 'react'
import Counter from '@/components/Counter/Counter'
import { map } from '@/app/film/[id]/page'
import { useRouter } from 'next/navigation'

export type Film = {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: string,
    id: string,
    rating: number,
    director: string,
    reviewIds: Array<string>
}

export interface Props {
    films: Array<Film>,
    filterByGenre: string,
    filterByCinema: string
    setFilms: Dispatch<SetStateAction<Film[]>>
    filterByName: string
}

async function getCinema(id:string) {
    const response = await fetch(`http://localhost:3001/api/movies?cinemaId=${id}`)

    return response.json()
}

const Films:FunctionComponent<Props> = function({ films, filterByGenre, filterByCinema, setFilms, filterByName }) {
    const router = useRouter()
    useEffect(() => {
        (async () => {if (filterByCinema) {
            let cinema = await getCinema(filterByCinema)
            setFilms(cinema)
        }})()
    }, [setFilms, filterByCinema])
    if (filterByGenre) films = films.filter(film => film.genre === filterByGenre)
    if (filterByName) films = films.filter(film => film.title.toLowerCase().includes(filterByName.toLowerCase()))

    return (
        <>
            {films.map((film: Film) =>
                <div className={classnames(itemFilm)} key={film.id}>
                    <div className={classnames(lSide)}>
                        <img className={classnames(filmImg)} src={film.posterUrl} width={100} height={120} alt=''></img>
                        <div className={classnames(descr)}>
                            <span className={classnames(title)} onClick={() => router.push(`/film/${film.id}`)}>{film.title}</span>
                            <span className={classnames(genre)}>{map.get(film.genre)}</span>
                        </div>
                    </div>
                    <Counter id={film.id}/>
                </div>
            )}
        </>
    )
}

export default Films