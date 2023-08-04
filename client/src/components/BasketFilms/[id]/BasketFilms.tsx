'use client'
import classnames from 'classnames'
import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFilmModule } from "@/redux/features/films/selector"
import { Film } from '@/components/Films/[id]/Films'
import Counter from '@/components/Counter/Counter'
import { useRouter } from 'next/navigation'
import {itemFilm, title, genre, descr, lSide, filmImg, RSide, delIcon, totalTickets} from './BasketFilms.module.scss'
import { selectBasketModule } from '@/redux/features/basket/selector'
import Image from 'next/image'
import ModalDelTicket from '@/components/ModalDelTicket/ModalDelTicket'
import { createPortal } from 'react-dom'
import { map } from '@/app/film/[id]/page'

const BasketFilms:FunctionComponent = function() {
    const [amount, setAmount] = useState(0)
    const [modal, setModal] = useState('')
    const router = useRouter()

    const products:Film[] = useSelector((state) =>
        selectFilmModule(state)
    )

    const productAmount = useSelector((state) =>
        selectBasketModule(state)
    )

    const productsOnBasket = Object.keys(productAmount)

    useEffect(() => {
        (() => {
            let initialValue = 0
            setAmount(Object.values(productAmount).reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                initialValue
            ))
        })()
    }, [productAmount])

    return (
        <>
            {products.filter(({id}) => productsOnBasket.includes(id)).map((film:Film) =>
                <div className={classnames(itemFilm)} key={film.id}>
                    <div className={classnames(lSide)}>
                        <img className={classnames(filmImg)} src={film.posterUrl} width={100} height={120} alt=''></img>
                        <div className={classnames(descr)}>
                            <span className={classnames(title)} onClick={() => router.push(`/film/${film.id}`)}>{film.title}</span>
                            <span className={classnames(genre)}>{map.get(film.genre)}</span>
                        </div>
                    </div>
                    <div className={classnames(RSide)}>
                        <Counter id={film.id} setModal={setModal}/>
                        <button
                        className={classnames(delIcon)}
                        onClick={() => setModal(!modal ? film.id : '')}
                        >
                            <Image src={'/del.svg'} height={20} width={20} alt='delete'/>
                        </button>
                    </div>
                </div>
            )}
            <div className={classnames(totalTickets)}>
                <span>Итого билетов:</span> {amount}
            </div>
            {modal && createPortal(<ModalDelTicket id={modal} setModal={setModal}/>, document.body)}
        </>
    )
}

export default BasketFilms