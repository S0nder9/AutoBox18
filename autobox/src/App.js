import React from "react";
import HeaderUpper from "./Components/UI/Header/HeaderUpper";
import BackgroundImgContainer from "./Components/UI/Background Img container/BackgroundImgContainer";
import Header from "./Components/UI/Header/Header";

function App() {
    return (
        <React.Fragment>
            <BackgroundImgContainer url = "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg" height = "100vh">
            <HeaderUpper/>
            <Header/>
            </BackgroundImgContainer>
        </React.Fragment>
    )
}

export default App;
