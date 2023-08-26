import React, { useState } from "react";
import { cards } from "../mock/cards";
import { Button, Form } from "react-bootstrap";
import CardComponent from "../components/Card";
import NavBar from "../components/NavBar";

export const Cards = () => {
  const [card, setCard] = useState(0);
  const [length, setLength] = useState(cards.length);

  const fnc = (title) => {
    console.log(title);
  };
  return (
    <div>
      <NavBar />

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setLength(card);
        }}
      >
        <Button
          className="btn btn-info p-2 m-2"
          onClick={() => {
            setLength(0);
            setCard("");
          }}
        >
          Remove Cards
        </Button>
        <input
          className="p-2 m-2"
          onChange={(e) => setCard(e.target.value)}
          value={card}
        ></input>
        <button type="submit" className="p-2 m-2 btn btn-dark">
          Submit
        </button>
      </Form>
      {length ? (
        cards.slice(0, length).map((card, index) => {
          return (
            <CardComponent
              key={index}
              title={card.title}
              description={card.description}
              cardFunc={() => fnc(card.title)}
            >
              <h1>this is child</h1>
            </CardComponent>
          );
        })
      ) : (
        <>no any cards</>
      )}
    </div>
  );
};
