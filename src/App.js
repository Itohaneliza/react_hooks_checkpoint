import { useState, useEffect, useCallback } from "react";
import AddMovie from "./AddMovie";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Filter";

const info = [
  {
    title: "The Black Book",
    img: "/image/Blackbook.jpg",
    description:
      "After his son is framed for a kidnapping, a bereaved deacon takes justice into his own hands and fights a corrupt police gang to absolve him.",
    posterURL: "www.blackbook.com",
    rating: 9.6,
  },
  {
    title: "Cosmos",
    img: "/image/Cosmos.jpg",
    description:
      "An exploration of our discovery of the laws of nature and coordinates in space and time.",
    posterURL: "www.cosmos.com",
    rating: 9.3,
  },
  {
    title: "John Wick",
    img: "/image/Jjohnwick.jpg",
    description:
      "When a gangster's son steals his car and kills his dog, fearless ex-hit man John Wick takes on the entire mob to get his revenge.",
    posterURL: "www.cosmos.com",
    rating: 9.3,
  },
  {
    title: "Prison Break",
    img: "/image/Prison Break.jpg",
    description:
      "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together.",
    posterURL: "www.prisonbreak.com",
    rating: 8.3,
  },

  {
    title: "The Walking Dead",
    img: "/image/The Walking Dead.jpg",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.",
    posterURL: "www.thewalkingdead.com",
    rating: 8.2,
  },
  {
    title: "Roman Empire",
    img: "/image/Roman Empire.jpg",
    description:
      "Chronicles some of the most famous leaders of the Roman Civilization.",
    posterURL: "www.romanempire.com",
    rating: 6.9,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  const filter = useCallback(
    (key, rate) => {
      setKeyword(key);
      setRate(rate);
      console.log(rate + "  " + key);
      setFiltredList(
        list.filter((element) => {
          return (
            element.title.toLowerCase().includes(key.toLowerCase()) &&
            element.rating >= rate
          );
        })
      );
    },
    [list, setKeyword, setRate]
  );

  useEffect(() => {
    filter(keyword, rate);
  }, [filter, keyword, rate]);

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList((prevList) => [...prevList, movie]);
    }
  }

  return (
    <div className="App">
      <Filter filter={filter} />
      <MovieList list={filtredList} />
      <AddMovie adding={adding} />
    </div>
  );
}

export default App;
