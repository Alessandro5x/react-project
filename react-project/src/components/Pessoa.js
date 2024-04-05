function Pessoa(name, age, job, img){

    return(
        <div>
            <img src={img} alt={name}/>
            <h2>name: {name}</h2>
            <p>age: {age}</p>
            <p>job: {job}</p>
        </div>
    )
}

export default Pessoa