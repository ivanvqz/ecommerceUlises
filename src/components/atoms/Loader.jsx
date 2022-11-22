import { Jelly } from "@uiball/loaders"


const Loader = () => {
    return (
        <div className="grid h-screen place-items-center">
            <Jelly 
                size={80}
                speed={0.9} 
                color="blue" 
            />
        </div>
    )
}

export default Loader