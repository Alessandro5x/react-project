import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log("Opa, ativação realizada!")
    }
    
    function segundoEvento(){
        console.log("Opa, ativação realizada!")
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento}text="Primeiro Evento"/>
            <Button event={segundoEvento}text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento