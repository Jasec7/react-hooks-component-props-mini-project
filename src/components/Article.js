import React from 'react';


function Article({title, date= 'January 1, 1970', preview, minute=0}){
    const getReadingTime = (minute) => {
        const emoji = minute < 30 ? '☕️' : '🍱';
        const divisor = minute < 30 ? 5 : 10;
        const count = Math.ceil(minute / divisor);
        return `${emoji.repeat(count)} ${minute} min read`;
      };
    return(
    <article>
      <h3>{title}</h3>
      <small>{date} • {getReadingTime(minute)}</small>
      <p>{preview}</p>
    </article>

    )
}
export default Article
