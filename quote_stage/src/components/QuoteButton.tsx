
import React from 'react';

interface QuoteButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const QuoteButton = ({ onClick, children }: QuoteButtonProps) =>  {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
            {children}
        </button>
    );
}

export default QuoteButton;