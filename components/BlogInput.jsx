
function BlogInput({ inputName, stateValue, changeState }){
    return(
        <div className="">
            {inputName}
            <input 
                className="text-black m-3"
                type="text" 
                value={stateValue}
                onChange={e => changeState(e.target.value)}
            />
        </div>
    )
}

export default BlogInput;