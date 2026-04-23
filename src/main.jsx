import { createRoot } from "react-dom/client";
import ThemeSelector from "./light-dark";

const root = createRoot(document.querySelector('#root'))

root.render(<>
<header>
    <div className="logo-wrapper">

<a href="#"><img src="assets/react.svg" alt="" /></a>
    </div>
    <ThemeSelector/>
</header>
</>)