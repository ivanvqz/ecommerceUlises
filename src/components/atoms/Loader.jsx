import { DotSpinner } from "@uiball/loaders"


const Loader = () => {
    return (
        <div className="grid h-screen place-items-center">
            <DotSpinner 
                size={40}
                speed={0.9} 
                color="blue" 
            />
        </div>
    )
}

export default Loader