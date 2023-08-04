'use client'
import Image from "next/image"
import { FunctionComponent, useState } from "react"
import { QuestionType } from "./page"
import classnames from "classnames"
import {opened , close, arrowUP} from './styles.module.scss'

const Question: FunctionComponent<QuestionType> = ({question, answer}) => {
    const [open, setOpen] = useState(false)

    return(
        <>
            { !open ?
                <button
                className={classnames(close)}
                onClick={() => setOpen(!open)}
                >
                    <h2>{question}</h2>
                    <Image src={'arrowDown.svg'} alt="" width={32} height={32}/>
                </button>
                :
                <button
                className={classnames(opened)}
                onClick={() => setOpen(!open)}
                >
                    <div>
                        <h2>{question}</h2>
                        <Image src={'arrowDown.svg'} alt="" width={32} height={32} className={classnames(arrowUP)}/>
                    </div>
                    {answer}
                </button>
            }
        </>
    )
}

export default Question