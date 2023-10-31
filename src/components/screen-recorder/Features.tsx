import { featuresText } from './Content';

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
            <div className="mx-auto lg:text-center">
                <h2 className="mt-2 font-bold tracking-tight text-gray-900 md:text-4xl lg:text-4xl text-2xl lg:text-center md:text-center text-start">
                    Easily Capture Your Screen, <span className='text-sky-600'>No Software Required</span>
                </h2>
                <p className="mt-4 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Easily record your screen with Online Screen Recorder. Perfect for students, teachers, businesses, and more.
                    Online Screen Recorder is designed with simplicity in mind. Its intuitive interface makes it easy for anyone to use.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-full">
                <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-full lg:grid-cols-3 lg:gap-y-16 mx-auto">
                    {featuresText.map((feature: any, index: number) => (
                        <div key={index} className="relative shadow-md border border-t-1 border-gray-200 bg-white rounded-md p-5">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className={`absolute top-[-20px] left-[-20px] flex h-10 w-10 items-center justify-center rounded-lg  shadow-lg ${index === 1 ? 'bg-sky-600' : 'bg-black'}`}>
                                    {feature.icon}
                                </div>
                                <span className='flex justify-start text-lg tracking-tight'>{feature.title}</span>
                            </dt>
                            <dd className="mt-2 leading-7 text-gray-600 text-sm">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Features;