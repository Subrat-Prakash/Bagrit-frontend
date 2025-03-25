import {
    Cpu,
    Users,
    Store,
    CalendarHeart,
    InspectionPanel,
  } from "lucide-react";
  
  export function FeatureOne() {
    return (
      <div className="px-2 py-2 md:px-6 md:py-10 mt-10 mb-4 ml-6 bg-green-400">
        <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl flex items-center justify-center">
          OUR USERS
        </h1>
  
        <hr className="border-black" />
  
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16 justify-items-center">
          {/* Item 1 */}
          <div className="space-y-3 ">
            <div className="flex items-center justify-center">
              <span className="inline-block rounded-full bg-gray-100 p-3 text-black ">
                <Store size={60} />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-semibold capitalize text-black">
                Shop-Listed
              </h1>
            </div>
          </div>
  
          {/* Item 2 */}
          <div className="space-y-3 ">
            <div className="flex items-center justify-center">
              <span className="inline-block rounded-full bg-gray-100 p-3 text-black ">
                <Users size={60} />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-semibold capitalize text-black">
                Monthly Views
              </h1>
            </div>
          </div>
  
          {/* Item 3 */}
          <div className="space-y-3 ">
            <div className="flex items-center justify-center">
              <span className="inline-block rounded-full bg-gray-100 p-3 text-black ">
                <CalendarHeart size={60} />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-semibold capitalize text-black">
                New Monthly Subscribers
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  