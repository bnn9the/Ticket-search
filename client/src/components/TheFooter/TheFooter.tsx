import classnames from 'classnames'
import {footer} from './styles.module.scss'
import Link from 'next/link'

const TheFooter = () => {
    return (
        <footer className={classnames(footer)}>
            <Link href={'/faq'}><span>Вопросы-ответы</span></Link>
            <Link href={'/about'}><span>О нас</span></Link>
        </footer>
    )
}

export {TheFooter}