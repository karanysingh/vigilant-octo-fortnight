import FooterWave from "../common/footerWave"

export const CTALanding = () => {
    return (
        <div className="flex justify-between flex-col items-center  h-[100vh]  w-full">
            <div className="flex justify-center flex-col items-center font-bold text-black h-[70vh] mt-20 gap-2 w-full">
                <div className="text-6xl text-center text-primary mb-10">
                    {"</> "} Codely
                </div>
                <div className="text-4xl text-green-400">
                    Its Not Just Another Platform
                </div>
                <div className="text-4xl text-green-600">
                    Its An Experience
                </div>
                <div className="text-4xl text-blue-400">
                    A Frictionless Learning Experience
                </div>
                <button className="w-[250px] px-4 py-2 h-max border-4 border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-2xl mt-10 duration-200 ease-in-out">Welcome Aboard!</button>
            </div>
            <div className="w-full h-[30vh]">
                <FooterWave />
            </div>
        </div>
    )
}