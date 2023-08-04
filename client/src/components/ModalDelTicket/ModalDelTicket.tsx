'use client'
import classnames from "classnames";
import { modal, header, body, footer, yes , no, page } from './ModalDelTicket.module.scss'
import Image from "next/image";
import { useDispatch } from "react-redux";
import { basketActions } from "@/redux/features/basket";
import { FunctionComponent } from "react";

interface Props {
    id: string
    setModal: Function
}

const ModalDelTicket:FunctionComponent<Props> = ({id, setModal}) => {
    const dispatch = useDispatch()
    const delItem = () => {
        dispatch(basketActions.delete(id))
        setModal('')
    }
    const closeModal = (target) => {
        if (target.target.id) setModal('')
    }
    return (
        <div
        className={classnames(page)}
        onClick={(target) => closeModal(target)}
        id="page"
        >
            <div className={classnames(modal)}>
                <div
                className={classnames(header)}
                >
                    Удаление билета
                <button
                onClick={() => setModal('')}
                >
                    <Image src={'/del.svg'} height={16} width={16} alt="delete"/>
                </button>
                </div>
                <div className={classnames(body)}>
                    Вы уверены, что хотите удалить билет?
                </div>
                <div className={classnames(footer)}>
                    <button
                    onClick={delItem}
                    className={classnames(yes)}
                    >
                        Да
                    </button>
                    <button
                    onClick={() => setModal('')}
                    className={classnames(no)}
                    >
                        Нет
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelTicket