import Header from "./components/Header";
import {Link, Outlet} from "react-router-dom";


function App() {



    return (
        <div className="container-xl App">
            <Header/>
            <nav>
                <Link to={"/list"} style={{marginRight: "10px"}}>List</Link>
                <Link to={"/feedback"} style={{marginRight: "10px"}}>Feedback</Link>
                <Link to={"/tabs"}>Tabs</Link>
            </nav>
            <main>
                <section>
                    <Outlet/>
                    {/*<List/>*/}
                    {/*<TabButtonsSection/>*/}
                </section>
            </main>
        </div>
    );
}

export default App;
