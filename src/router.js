import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import List from "./components/List/List";
import TabButtonsSection from "./components/TabButtonsSection";
import Feedback from "./Feedback";
import EffectSection from "./components/EffectSection/EffectSection";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"feedback/",
                element:<Feedback/>
            },
            {
                path:"list/",
                element:<List/>
            },
            {
                path:"list/:id",
                element:<List/>
            },
            {
                path:"tabs/",
                element:<TabButtonsSection/>
            },
            {
                path: "effect/",
                element: <EffectSection/>
            }
        ]
    },
]);