import '../css/Headline.css'

function Headline(props) {
    return ( 
        <div className="title">
            <h1>{props.title}</h1>
        </div>
     );
}

export default Headline;