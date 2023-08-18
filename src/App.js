import CardComponent from "./components/Card";
import NavBar from "./components/NavBar";
import { cards } from "./mock/cards";

function App() {
  const fnc = (title) => {
    console.log(title);
  };
  return (
    <>
      <NavBar />
      {cards.map((card, index) => {
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
      })}
    </>
  );
}

export default App;
