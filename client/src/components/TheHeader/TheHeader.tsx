'use client'
import Image from "next/image"
import {header, logo, basket, basketCounter, divBasket} from './styles.module.scss'
import classnames from 'classnames'
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectBasketModule } from "@/redux/features/basket/selector"

const TheHeader = () => {
    const [amount, setAmount] = useState(0)

    const productAmount = useSelector((state) =>
    selectBasketModule(state)
)

    useEffect(() => {
            (() => {
                const initialValue = 0
                setAmount(Object.values(productAmount).reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    initialValue
                ))
            })()
        }, [productAmount])

    return (
        <header className={classnames(header)}>
            <Link href={'/'}><h1 className={classnames(logo)} >Билетопоиск</h1></Link>
            <div className={classnames(divBasket)}>
                <div className={classnames(basketCounter)}>{amount}</div>
                <Link
                href={'/basket'}
                >
                    <Image
                    className={classnames(basket)}
                    src="/basket.png"
                    width={32}
                    height={32}
                    alt=""
                    />
                </Link>
            </div>
        </header>
    )
}

export {TheHeader}