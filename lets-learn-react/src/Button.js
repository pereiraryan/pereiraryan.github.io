
function Button( {color, setColor} ) {

    return (
        <button 
        
        // className={color}
        style={{
            backgroundColor:color,
        }}

        onClick={() => {   

        setColor(color);

      }}
      > {color}
      
      </button>

    )
    
}

export default Button;
 