import React from "react";

function Article({title, date, preview, minutes}){
    let time = ""
    let emoji = ""
    const coffee = '☕️'
    const bento = '🍱'

    if(minutes <= 30){
        time = Math.round(minutes/5)
        emoji = coffee 
    }
    else{
        time = Math.round(minutes/10)
        emoji = bento
    }
    return(
        <div>
            <h3>{title}</h3>
            <small>{date} {emoji.repeat(time)}</small>
            <p>{preview}</p>
        </div>
    )
}

export default Article;