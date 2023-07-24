
const Card = ({title, imageUrl, color, bgcolor,toggleTitle,showText}) => {


    return(
        <>
         {/* <div className={color === 'blue' ?
    'text-primary': 'text-dark'}> */}
    <div style={{color: color, backgroundColor: bgcolor }}>
        <span style={{visibility: showText ? 'visible' : 'hidden' }}>{title}</span>
         
         {imageUrl}
         <button onClick={toggleTitle}>{showText ? 'hide' : 'show'} title</button>
            </div>
        </>
       
    )
}

export default Card;