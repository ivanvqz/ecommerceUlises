import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = () => {
    return (
        <div className="fixed bg-gradient w-full z-10">
            <div className="container cont w-full m-auto flex items-center lg:max-w-256 padding">
                <Logo />
                <MainMenu />
            </div>
        </div>
    )
}

export default MainHeader