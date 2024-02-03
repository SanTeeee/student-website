import React from "react";


function Input(){
    return (
        <div className="inputHolder">
            <form className="inputer">
                <input placeholder="Your Email" required type="email"/>
                <button>Subscribe</button>

            </form>

        </div>
    )
}

export default Input;