import classnames from "classnames"
import {container} from './styles.module.scss'
import Question from "./question"

export interface QuestionType {
    question: string,
    answer: string
}

const FAQ = () => {
    const questions: QuestionType[] = [
        {question: 'Что такое Билетопоиск?', answer: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'},
        {question: 'Какой компании принадлежит Билетопоиск?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu nisi, malesuada vitae nunc at, gravida placerat tellus. Quisque in pretium turpis, ac laoreet nisl. Vestibulum sed dignissim felis, in hendrerit ligula. Duis at nisl quis leo pellentesque scelerisque at quis turpis. Praesent dictum magna nec urna pretium lobortis. Nam laoreet magna pharetra, bibendum augue nec, sodales nibh. In hac habitasse platea dictumst. Vivamus eu dignissim nibh, in consectetur lectus. Vivamus iaculis venenatis libero, a pharetra mi feugiat eget. In purus orci, ultrices sed iaculis quis, sodales ultrices magna. Donec sollicitudin elit a libero blandit, id mollis leo dapibus. Cras tortor elit, cursus a aliquet vehicula, placerat id leo.'},
        {question: 'Как купить билет на Билетопоиск?', answer: 'Donec fringilla lorem auctor nisl blandit elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae justo neque. Vestibulum fermentum faucibus turpis, quis porttitor nulla laoreet eu. Duis varius venenatis tempor. Sed mollis, augue et congue auctor, elit mi lacinia lacus, vel maximus arcu nulla sit amet nisl. Proin luctus lacus vestibulum sapien faucibus vehicula nec non eros.'},
        {question: 'Как оставить отзыв на Билетопоиск?', answer: 'Fusce molestie massa vel tortor dignissim pharetra. Nunc ex enim, eleifend in velit ac, tempor convallis risus. Duis rutrum purus ut nulla pretium imperdiet eu at augue. Integer rutrum, est sed rutrum tempus, justo magna consequat sem, vitae iaculis risus nulla fermentum augue. Proin viverra tellus a auctor ultricies. Cras viverra bibendum erat, sed finibus mi commodo in. Ut auctor consectetur volutpat. Duis cursus venenatis tellus quis ullamcorper. Curabitur interdum, odio ac dapibus rhoncus, nisi metus luctus purus, nec eleifend velit nunc nec dui. Duis commodo quis ex quis auctor.'}
    ]

    return (
        <div className={classnames(container)}>
            <h1>Вопросы-ответы</h1>
            {questions.map(({question, answer}, i) =>
                <Question key={i} question={question} answer={answer}/>
            )}
        </div>
    )
}

export default FAQ