import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const currentPage = useRef(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setPagesCount(Math.ceil(data.results.length / ITEMS_PER_PAGE));
        updateCharacters(1, data.results);
      });
  }, []);

  const updateCharacters = (page, allCharacters = characters) => {
    currentPage.current = page;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setCurrentCharacters(allCharacters.slice(start, end));
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>Rick and Morty Characters</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
        {currentCharacters.map(char => (
          <div key={char.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
            <img src={char.image} alt={char.name} width="100" />
            <p>{char.name}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        {Array.from({ length: pagesCount }, (_, i) => (
          <button
            key={i}
            onClick={() => updateCharacters(i + 1)}
            style={{
              margin: "0 5px",
              padding: "8px 12px",
              background: currentPage.current === i + 1 ? "#007BFF" : "#eee",
              color: currentPage.current === i + 1 ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
