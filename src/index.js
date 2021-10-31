import React from "react";
import reactDom from "react-dom";

//CSS
import "./index.css";

import { data } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

function Booklist() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

reactDom.render(<Booklist />, document.getElementById("root"));
