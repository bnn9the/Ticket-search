import { FunctionComponent } from 'react'
import Films, { Props } from '../Films/[id]/Films'

const MainSection:FunctionComponent<Props> = ({films, filterByGenre, filterByCinema, setFilms, filterByName}) => {
    return (
        <div>
            <Films
                films={films}
                filterByGenre={filterByGenre}
                filterByCinema={filterByCinema}
                setFilms={setFilms}
                filterByName={filterByName}
            />
        </div>
    )
}

export default MainSection