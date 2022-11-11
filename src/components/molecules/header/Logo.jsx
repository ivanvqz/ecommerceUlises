import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        // ajustar o tamanho da imagem
        <div className="logo flex">
            <Link to="/">
                <img
                    src="https://ed.team/images/logo/logo-monocolor.svg" 
                    alt="logo"
                />
            </Link>
        </div>
    )
}

export default Logo