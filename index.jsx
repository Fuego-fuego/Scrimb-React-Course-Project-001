import { createRoot } from "react-dom/client";
import ThemeSelector from "./light-dark";

const root = createRoot(document.querySelector('#root'))

root.render(<>
<header>
    <ThemeSelector/>
</header>
</>)