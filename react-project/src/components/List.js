import Item from "./Item"

function List(){
    return(
        <>]
            <h1>Minha Lista </h1>
            <ul>
                <Item marca ="Ferrari" ano_lancamento={1985}/>
                <Item marca ="Lambo"ano_lancamento={1986}/>
            </ul>
        </>
    )
}

export default List