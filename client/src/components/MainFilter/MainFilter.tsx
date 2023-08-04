'use client'
import classnames from 'classnames'
import {container, filterItem, searchFilterSpan, selectSection, section, options} from './styles.module.scss'
import { FunctionComponent, useEffect, useState, SetStateAction, Dispatch } from 'react'
import Image from 'next/image'
import { map } from '@/app/film/[id]/page'


const getData = async() => {
    const data = await fetch('http://localhost:3001/api/cinemas')

    return data.json()
}

type Cinemas = {
    id: string,
    name: string,
    movieId: Array<string>,
}

type Props = {
    filterByGenre: string
    filterByCinema: string
    setFilterByGenre: Dispatch<SetStateAction<string>>
    setFilterByCinema: Dispatch<SetStateAction<string>>
    setfilterByName: Dispatch<SetStateAction<string>>
}

const MainFilter:FunctionComponent<Props> = ({ filterByGenre, filterByCinema, setFilterByGenre, setFilterByCinema, setfilterByName }) => {
    const [cinemas, setCinemas] = useState([])
    const [genre, setGenre] = useState(false)
    const [cinemaState, setCinemaState] = useState(false)

    useEffect(() => {
        (async () => {
            const cinemas = await getData()
            setCinemas(cinemas)
        })()
    }, [])

    return (
        <div className={classnames(container)}>
            <span className={classnames(searchFilterSpan)}>Фильтр поиска</span>
            <div className={classnames(filterItem)}>
                <span>Название</span>
                <input
                type="text"
                placeholder='Введите название'
                onInput={({target}) => setfilterByName(target.value)}
                />
            </div>
            <div className={classnames(filterItem)}>
                <span>Жанр</span>
                <div className={classnames(section)}>
                    <button
                    onClick={() => setGenre(!genre)}
                    style={genre ? {border: '1px solid #FF5500', color: '#1B1F23', padding: '10px 16px', borderRadius: '8px'} : {border: '1px solid #E1E3E6', padding: '10px 16px', borderRadius: '8px'}}
                    >
                        <div
                        className={classnames(selectSection)}
                        style={genre ? {color: '#1B1F23'} : {}}
                        >
                            {filterByGenre ? map.get(filterByGenre) : 'Выберите жанр'}
                            <Image src={'/arrowSortDown.svg'} height={20} width={20} alt='' style={genre ? {rotate: '180deg'} : {}}/>
                        </div>
                    </button>
                    {genre &&
                        <div className={classnames(options)}>
                            <button
                            onClick={() => setFilterByGenre('')}
                            >Не выбран</button>
                            <button
                            onClick={() => setFilterByGenre('action')}
                            >Боевик</button>
                            <button
                            onClick={() => setFilterByGenre('comedy')}
                            >Комедия</button>
                            <button
                            onClick={() => setFilterByGenre('fantasy')}
                            >Фэнтези</button>
                            <button
                            onClick={() => setFilterByGenre('horror')}
                            >Ужасы</button>
                        </div>
                    }
                </div>
            </div>
            <div className={classnames(filterItem)}>
                <span>Кинотеатр</span>
                <div className={classnames(section)}>
                    <button
                    onClick={() => setCinemaState(!cinemaState)}
                    style={cinemaState ? {border: '1px solid #FF5500', color: '#1B1F23', padding: '10px 16px', borderRadius: '8px'} : {border: '1px solid #E1E3E6', padding: '10px 16px', borderRadius: '8px'}}
                    >
                        <div
                        className={classnames(selectSection)}
                        style={cinemaState ? {color: '#1B1F23'} : {}}
                        >
                            {filterByCinema ? filterByCinema : 'Выберите кинотеатр'}
                            <Image src={'/arrowSortDown.svg'} height={20} width={20} alt='' style={cinemaState ? {rotate: '180deg'} : {}}/>
                        </div>
                    </button>
                        {cinemaState &&
                            <div className={classnames(options)}>
                                {cinemas.map((cinema: Cinemas) =>
                                    <button
                                    key={cinema.id}
                                    onClick={() => setFilterByCinema(cinema.id)}
                                    >
                                        {cinema.name}
                                    </button>
                                )}
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default MainFilter