import { createBrowserRouter } from "react-router-dom";
import Main from "../body/Main";
import Content from "../body/Content";
import Watch from "../watch/Watch";

export const appRouter = createBrowserRouter([
    {
        'path':'/',
        'element':<Main/>,
        'children':[{
            'path':"/",
            'element':<Content/>,
         
        },
        {
            "path":"/watch",
            'element':<Watch/>,
        }, 
        ]

    }
])