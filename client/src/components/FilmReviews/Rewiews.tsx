import classnames from "classnames"
import { FunctionComponent } from "react"
import {container, headReview, img} from './styles.module.scss'
import Image from "next/image"

interface Props {
    id: string,
    name: string,
    text: string,
    rating: number
}

const Reviews:FunctionComponent<Props> = ({name, text, rating}) => {
return (
    <div className={classnames(container)}>
        <div className={classnames(headReview)}>
            <Image src={'/photo.svg'} height={100} width={100} alt='hgyrturtujr' className={classnames(img)}/>
            <div>
                <span style={{marginBottom: '16px'}}>{name}</span>
                <div>{text}</div>
            </div>
        </div>
        <div>Оценка: <span>{rating}</span></div>
    </div>
)
}

export default Reviews