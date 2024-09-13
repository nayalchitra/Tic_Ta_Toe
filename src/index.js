import { createRoot } from "react-dom/client";
import App from "./App";


const rootElement = document.getElementById('root');
console.log(rootElement);
const root = createRoot(rootElement);

root.render(<App/>);