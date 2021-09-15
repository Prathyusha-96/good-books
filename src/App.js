import React from "react";
import "./styles.css";
import { useState } from "react";
const booksDB = {
  javascript: [
    { name: "Eloquent javascript", rating: "4/5" },
    {
      name: "you don't know js",
      rating: "3.5/5"
    }
  ],
  fiction: [
    {
      name: "Harrypotter & the Deathly Hallows",
      rating: "4.8/5"
    },
    {
      name: "Deacon King kong",
      rating: "3.8/5"
    },
    {
      name: "A Children's Bible",
      rating: "4/5"
    }
  ],
  Mythology: [
    {
      name: "The immortals of Meluha",
      rating: "4.5/5"
    },
    {
      name: "Mahabarata",
      rating: "4.8/5"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("javascript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "2rem" }}>Good Books</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(booksDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              backGround: "#9CA3AF",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem .3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "2" }}>
          {booksDB[selectedGenre].map((books) => (
            <li
              key={books.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid white",
                width: "65%",
                margin: "1rem 1rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {books.name} </div>
              <div style={{ fontSize: "smaller" }}> {books.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
