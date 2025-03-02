import { marked } from "marked";
import "./previewer.css"

function Preview({ text }) {
    const htmlContent = marked.parse(text); // Convert the entire text to HTML

    return (
        <div 
            className="preview"
            dangerouslySetInnerHTML={{ __html: htmlContent }} // Render the HTML content safely
        ></div>
    );
}

export default Preview;