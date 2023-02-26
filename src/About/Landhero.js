const Landhero = ({title, detail}) => {
    return(
        <div>
            <h4 className="w-50 ms-2 title Landtitle">{title}</h4>
            <p className="Landdetail">{detail}</p>
        </div>
    )
}

export default Landhero