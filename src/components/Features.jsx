import { features } from "../constants"

const Features = () => {
    return (
        <>
            <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
                <div className='text-center'>
                    <span className='bg-neutral-900 text-orange-500 rounded-full text-sm font-medium px-2 py-1 uppercase h-6'>feature</span>
                    <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>Easily build
                        <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{" "}your code</span>
                    </h2>
                </div>
                <div className="flex flex-wrap mt-10 lg:mt-20">
                    {
                        features.map((feature, index) => (
                            <div key={index} className="w-full lg:w-1/3 sm:w-1/2">
                                <div className="flex">
                                    <div className="mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-xl mt-1 mb-6">{feature.text}</h5>
                                        <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Features