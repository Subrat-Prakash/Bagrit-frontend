import { PaintBucket, Heart, Globe } from 'lucide-react'

export function FeatureTwo() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-2 lg:px-8 mb-20 mt-20 ml-8">
                <div className="mb-4 max-w-lg">
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
                        OUR MISSION
                    </h2>
                </div>
                <hr />
                <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-start">
                        <Globe className="h-11 w-11 text-gray-700" />
                        <div className="ml-5">
                            <h3 className="text-xl font-semibold text-black"> Sustainability</h3>
                            <p className="mt-3 text-base text-gray-600">
                            To revolutionize the packaging industry by transforming non-biodegradable polythene into eco-friendly, biodegradable alternatives that reduce plastic waste and protect the environment.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <PaintBucket className="h-11 w-11 text-gray-700" />
                        <div className="ml-5">
                            <h3 className="text-xl font-semibold text-black">Premium & Functional Design</h3>
                            <p className="mt-3 text-base text-gray-600">
                            To provide high-quality biodegradable polythene bags that combine durability, innovation, and custom branding, helping businesses promote sustainability without compromising on aesthetics.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Heart className="h-9 w-9 text-gray-700" />
                        <div className="ml-5">
                            <h3 className="text-xl font-semibold text-black">Eco-Conscious Future</h3>
                            <p className="mt-3 text-base text-gray-600">
                            To drive awareness and adoption of biodegradable solutions, encouraging businesses and consumers to choose sustainable packaging for a cleaner, greener planet. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}