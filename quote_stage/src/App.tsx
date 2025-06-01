import { useEffect, useState } from "react";
import "./App.css";
import type { Quote } from "./types";
import axios from "axios";
import QuoteButton from "./components/QuoteButton";
import QuoteCard from "./components/QuoteCard";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [quote, setQuote] = useState<Quote>({ q: "", a: "" });
  const [theme, setTheme] = useState<string>("light");
  const [fontSize, setFontSize] = useState<string>("base");
  const [liked, setLiked] = useState<boolean>(false);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const fetchQuote = async () => {
    const res = await axios.get("https://zenquotes.io/api/random");
    if (res.data && res.data.length > 0) {
      setQuote(res.data[0]);
      setLiked(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">
        QuoteSage - Daily Quote Generator
      </h1>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <div className="my-4">
        <label htmlFor="font-size" className="mr-2">
          Font Size:
        </label>
        <select
          id="font-size"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="sm">Small</option>
          <option value="base">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      <QuoteCard
        quote={quote}
        fontSize={fontSize}
        theme={theme}
        liked={liked}
        onLike={() => setLiked(!liked)}
      />

      <div className="mt-4">
        <QuoteButton onClick={fetchQuote}>New Quote</QuoteButton>
      </div>
    </div>
  );
}

export default App;
