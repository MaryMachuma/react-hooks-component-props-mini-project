import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let emojis = "";
  if (minutes < 30) {
    const coffeeCups = Math.ceil(minutes / 5);
    emojis = "☕️".repeat(coffeeCups);
  } else {
    const bentoBoxes = Math.ceil(minutes / 10);
    emojis = "🍱".repeat(bentoBoxes);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;