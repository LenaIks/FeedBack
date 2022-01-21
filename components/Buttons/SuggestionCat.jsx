import React from 'react'

function SuggestionCat({button,filter}) {
    return (
        <div className="bg-white-normal rounded-[0.625rem] px-4 py-2 w-1/4">
            {button.map((cat,index) => {
                return <button key= {index}
                className= "bg-white-dark text-blue-normal mr-[0.5rem]  mb-[0.5rem] hover:bg-white-dark-hover focus:text-white-normal focus:bg-blue-normal px-2 py-1 rounded-[0.625rem]" 
                type="button" 
                onClick={()=> filter(cat)}>{cat}</button>
            }
            )}
        </div>
    )
}

export default SuggestionCat;
