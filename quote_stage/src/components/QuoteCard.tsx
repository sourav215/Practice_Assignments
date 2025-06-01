

interface Quote {
  q: string; // quote text
  a: string; // author
}

interface QuoteCardProps {
    quote: Quote;
    fontSize: string; 
    theme: string; 
    liked: boolean; 
    onLike: () => void;
}

const QuoteCard = ({ quote, fontSize, theme, liked, onLike }: QuoteCardProps) => {
    return (
    <div className={`p-4 rounded-xl shadow-xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}> 
      <p className={`text-${fontSize} italic mb-2`}>
        "{quote.q}"
      </p>
      <p className="text-right text-sm font-semibold">- {quote.a}</p>
      <button onClick={onLike} className="mt-2 text-red-500">
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default QuoteCard;