import React from "react"
import { useRef } from "react"

function Search(props){
    let inputRef = useRef(null)
    
    const performSearch = () => {
       let currentValue = inputRef.current.value.trim();

       if(currentValue.length != 0){
            props.searchprop(currentValue)
       }


        

    }


    return (
        <React.Fragment>
                <input type='text' style={{ height: '40px', width: '300px' }} ref={inputRef}/>
                <button style={{ height: '40px'}} onClick={performSearch}>Search</button>
        </React.Fragment>


    )





}

export default Search