function OutraLista({itens}){
    return(
        <>
            <h3>Lista de coisas interessantes:</h3>
            {itens > 0 ? (
                itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista</p>
            )
            }
        </>
    )

}

export default OutraLista