import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon
} from "@heroicons/react/outline"
import Feed from "./Feed"

function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* left */}
                <div className="relative hidden lg:inline-grid w-24">
                    <Image 
                    src="https://links.papareact.com/ocw"
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                <Image 
                    src="https://links.papareact.com/jjm"
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                {/* middle */}
                <div className="mt-1 relative p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="search"  />
                </div>
                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className=" navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn  rotate-45" />
                        <div className="absolute -top-2 -right-3 text-white animate-pulse text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">3</div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img className="h-10 w-10 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1997&q=80" alt=" profile pic" />
                </div>
                
            </div>
            
        </div>
    )
}

export default Header
