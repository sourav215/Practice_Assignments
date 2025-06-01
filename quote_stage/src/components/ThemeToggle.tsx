interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
}

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className={`text-sm px-3 py-1 border rounded-full shadow ${
        theme === "dark"
          ? "text-gray-100 bg-black"
          : "text-gray-800 bg-gray-200"
      }`}
    >
      Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};
export default ThemeToggle;
