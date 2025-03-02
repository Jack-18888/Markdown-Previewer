import './editor.css';
import { useRef, useState, useEffect } from 'react';

function Editor({ text, setText }) {
    const textareaRef = useRef(null);
    const numbersRef = useRef(null);
    const [darkMode, setDarkMode] = useState(false);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        const numbers = numbersRef.current;
        if (textarea && numbers) {
            textarea.style.height = "auto"; // Reset height
            textarea.style.height = `${Math.max(textarea.scrollHeight, 300)}px`; // Maintain minimum height
            numbers.style.height = textarea.style.height; // Sync numbers height
        }
    };

    const handleChange = (event) => {
        setText(event.target.value);
        adjustHeight(); // Adjust height on change
    };

    useEffect(() => {
        adjustHeight(); // Ensure initial sync
    }, [text]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const lineNum = text.split("\n").map((_, index) => index + 1);

    return (
        <div className={`editor ${darkMode ? "dark-mode" : "light-mode"}`}>
            <div className="toolbar">
                <button onClick={toggleTheme} className={`${darkMode ? "dark-button" : "light-button"}`}>
                    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
            <div className="editor-container">
                <div ref={numbersRef} className="numbers">
                    {lineNum.map((number) => (
                        <span key={number} className={`${darkMode ? "light" : "dark"}`}>
                            {number}
                        </span>
                    ))}
                </div>
                <textarea
                    ref={textareaRef}
                    name="editor"
                    id="editor"
                    value={text}
                    onChange={handleChange}
                    placeholder="Write Markdown here..."
                />
            </div>
        </div>
    );
}

export default Editor;
