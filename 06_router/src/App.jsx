import React from "react"
import Root from "./pages/Root"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Videos from "./pages/Videos"
import VideoDetail from "./pages/VideoDetail"

const router = createBrowserRouter([
    {//http://localhost:5173
        path:"/",
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <Home/>},
            {path: "videos", element: <Videos/>},
            {path: "videos/:videoId", element: <VideoDetail/>}
        ]
    },
    { //http://localhost:5173/videos
        path:"/videos",
        element: <Videos/>
    }

])

function App(){
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App