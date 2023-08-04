import classnames from "classnames";
import {logo, container, info, infoName, logoDiv} from "./styles.module.scss"
import Counter from "@/components/Counter/Counter";
import FilmReviews from "@/components/FilmReviews/Rewiews";

async function getCinema(id: string):Promise<any> {
    const film = await fetch(`http://localhost:3001/api/movie?movieId=${id}`)
    const reviews = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`)

    return {film: await film.json(), reviews: await reviews.json()}
}

type Params = {
    id: string
}

type Review = {
    id: string,
    name: string,
    text: string,
    rating: number
}

export const map = new Map([
    ['fantasy', 'Фэнтези'],
    ['horror', 'Ужасы'],
    ['action', 'Боевик'],
    ['comedy', 'Комедмя']
])

export default async function FilmPage({ params }: {params:Params}) {
    const {film, reviews} = await getCinema(params.id)

    return (
        <div>
            <div className={classnames(container)}>
                <div className={logoDiv}>
                    <img className={classnames(logo)} src={film.posterUrl} width={400} height={500} alt="logo" />
                </div>
                <div className={classnames(info)}>
                    <h1>{film.title}</h1>
                    <span>
                        <span className={classnames(infoName)}>Жанр: </span>
                        {map.get(film.genre)}
                    </span>
                    <span>
                        <span className={classnames(infoName)}>Год выпуска: </span>
                        {film.releaseYear}
                    </span>
                    <span>
                        <span className={classnames(infoName)}>Рейтинг: </span>
                        {film.rating}
                    </span>
                    <span>
                        <span className={classnames(infoName)}>Режиссер: </span>
                        {film.director}
                    </span>
                    <span>
                        <span className={classnames(infoName)}>Описание</span>
                        <div>{film.description}</div>
                    </span>
                </div>
                <Counter id={film.id}/>
            </div>
            {reviews.map((review: Review) =>
                <FilmReviews
                key={review.id}
                id={review.id}
                name={review.name}
                text={review.text}
                rating={review.rating}
                />
            )}
        </div>
    )
}