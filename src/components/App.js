import Navbar from "./Navbar";
import Contact from "./Navbar/Contact";
import Paypal from "./Navbar/Paypal";
import Tools from "./Navbar/Tools";
import Ordonner from "./Ordonner";

import "./app.scss";

function App() {
    const path = "https://micetf.fr";
    const tool = "Ordo'Nombres";

    return (
        <>
            <Navbar
                path={path}
                tool={tool}
                right={[
                    <Paypal />,
                    <Tools path={path} />,
                    <Contact tool={tool} />,
                ]}
            />
            <Ordonner />
        </>
    );
}

export default App;
