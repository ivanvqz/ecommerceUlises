import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        // ajustar o tamanho da imagem
        <div className="logo w-full flex">
            <Link to="/">
                {/* <img
                    src="https://ed.team/images/logo/logo-monocolor.svg" 
                    alt="logo"
                /> */}
                <h3 className="text-2xl font-bold uppercase">Logo.</h3>
            </Link>
        </div>
    )
}

export default Logo