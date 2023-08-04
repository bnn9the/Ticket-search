'use client'
import classnames from 'classnames'
import MainFilter from '@/components/MainFilter/MainFilter'
import MainSection from '@/components/MainSection/MainSection'
import {leftSide, mainSection, mainPage} from './styles.module.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filmActions } from '@/redux/features/films'
import { selectFilmModule } from '@/redux/features/films/selector'
import { Film } from '@/components/Films/[id]/Films'

async function getCinemas() {
  const response = await fetch('http://localhost:3001/api/movies')

  return response.json()
}

export default function Home() {
  const [films, setFilms] = useState<Film[]>([])
  const [filterByName, setfilterByName] = useState('')
  const [filterByGenre, setFilterByGenre] = useState('')
  const [filterByCinema, setFilterByCinema] = useState('')
  const dispatch = useDispatch()
  const products:Film[] = useSelector((state) =>
    selectFilmModule(state)
  )
  useEffect(() => {
    setFilms(products)
    if (!films.length) {
      (async () => {
          const films = await getCinemas()
          setFilms(films)
          dispatch(filmActions.setFilms(films))
      })()
    }
  }, [dispatch])

  return (
    <div className={classnames(mainPage)}>
      <section className={classnames(leftSide)}>
        <MainFilter
          filterByGenre={filterByGenre}
          filterByCinema={filterByCinema}
          setFilterByGenre={setFilterByGenre}
          setFilterByCinema={setFilterByCinema}
          setfilterByName={setfilterByName}
        />
      </section>
      <section className={classnames(mainSection)}>
        <MainSection
          films={films}
          setFilms={setFilms}
          filterByGenre={filterByGenre}
          filterByCinema={filterByCinema}
          filterByName={filterByName}
        />
      </section>
    </div>
  )
}
