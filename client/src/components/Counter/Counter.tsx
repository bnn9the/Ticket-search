'use client'
import Image from "next/image"
import {changeBasket} from './styles.module.scss'
import classNames from "classnames"
import { Dispatch, FunctionComponent, SetStateAction } from "react"
import { basketActions } from "@/redux/features/basket"
import { useDispatch, useSelector } from "react-redux"
import { selectProductAmount } from "@/redux/features/basket/selector"
import { usePathname } from "next/navigation"

interface Props {
    id: string
    setModal: Dispatch<SetStateAction<string>>
}


const Counter:FunctionComponent<Props> = ({id , setModal = false}) => {
    const dispatch = useDispatch()
    const pathname = usePathname()
    const productAmount = useSelector((state) =>
        selectProductAmount(state, id)
    )

    return (
        <div className={classNames(changeBasket)}>
            <Image
            onClick={() => productAmount === 1 && pathname === '/basket' ? setModal(id) : dispatch(basketActions.decrement(id))}
            src={!productAmount ? '/minusInactive.svg' : '/minusActive.svg'}
            width={20}
            height={20}
            alt=''>
            </Image>
            {productAmount}
            <Image
            onClick={() => dispatch(basketActions.increment(id))}
            src={productAmount === 30 ? '/plusInactive.svg' : '/plusActive.svg'}
            width={20}
            height={20}
            alt=''>
            </Image>
        </div>
    )
}

export default Counter