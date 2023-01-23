import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = ({children}) => {
    return (
        <div className="fixed bg-gradient w-full z-10">
            <div className="container cont w-full m-auto flex items-center lg:max-w-256">
                <Logo />
                {children}
                {/* renderiza el componente que se le pasa como children */}
            </div>
        </div>
    )
}

export default MainHeader