import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BooksContext from './context/booksContext.jsx'
createRoot(document.getElementById('root')).render(
    <BooksContext>
        <App />
    </BooksContext>
)
