import { BiMenu } from "react-icons/bi"

function Navbar() {
    return (
        <div>
            <nav className="bg-emerald-700 h-16 flex justify-center items-center px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">My Website</div>
                    <ul className="hidden md:flex space-x-4">
                        <li><a href="#" className="link transition-all duration-500">Home</a></li>
                        <li><a href="#" className="link transition-all duration-500">About</a></li>
                        <li><a href="#" className="link transition-all duration-500">Services</a></li>
                        <li><a href="#" className="link transition-all duration-500">Contact</a></li>
                    </ul>
                    <div className="flex md:hidden justify-center items-center">
                        <BiMenu size={32} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar