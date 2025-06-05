import { Logo } from "./logo/logo"



export const Navbar = () => {
  return (
      <nav className="relative z-10 py-4 px-6">
        <div className="flex justify-between items-center mx-auto">
          <div className="flex gap-6 items-center">
            <Logo/>
            <div className="hidden md:block">
              <ul className="flex gap-6 font-semibold text-gray-300">
                <li className="hover:text-gray-500 cursor-pointer transition-colors">Product</li>
                <li className="hover:text-gray-500 cursor-pointer transition-colors">Solutions</li>
                <li className="hover:text-gray-500 cursor-pointer transition-colors">Resources</li>
                <li className="hover:text-gray-500 cursor-pointer transition-colors">For Business</li>
                <li className="hover:text-gray-500 cursor-pointer transition-colors">Pricing</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-6 items-center">
            <ul className="hidden md:flex items-center gap-4 text-white">
              <li className="hover:text-gray-300 cursor-pointer transition-colors">Contact Sales</li>
              <li className="hover:text-gray-300 cursor-pointer transition-colors">Login</li>
            </ul>
            <button className="px-6 py-2 rounded-lg font-semibold transition-colors border border-white text-white hover:text-black hover:bg-white cursor-pointer">
              Start for Free
            </button>
          </div>
        </div>
      </nav>
  )
}

