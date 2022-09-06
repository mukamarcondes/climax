export default function Card(props){
    return(
        <div className="card-container">
            <div className="top-card">
                <img src={props.img} alt="Imagem do clima"/>
                <p>{props.temp}°</p>
            </div>
            <div className="temps">
                <div className="temps-min">
                    <img src={props.temp_min} alt="Temperatura minima"/>
                    <p>{props.min}</p>
                </div>
                <div className="temps-min">
                    <img src={props.temp_max} alt="Temperatura máxima"/>
                    <p>{props.max}</p>
                </div>
            </div>
            <span>{props.local}</span>
            <div className="bottom-card">
                <ul>
                    <li>Umidade do ar: {props.umidade}%</li>
                    <li>Índice uv: {props.uv}%</li>
                    <li>Sensação térmica: {props.sesacao}°</li>
                </ul>
            </div>
        </div>
    )
}