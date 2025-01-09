import { Outlet, Link } from "react-router-dom";

function Head() {
  const navItems = [
    {
      name: "Swiggy Corporate",
      icon: "fi-rr-box",
    },
    {
      name: "Search",
      icon: "fi-rr-search",
    },
    {
      name: "Offers",
      icon: " fi-rs-badge-percent",
    },
    {
      name: "Help",
      icon: " fi-sr-info",
    },
    {
      name: "Sign in",
      icon:"fi-ss-user-add",
    },
    {
      name: "Cart",
      icon: "fi-rr-order-history",
    },
  ];

  return (
   <>
    <header className="w-full shadow-md h-20 flex justify-center items-center sticky top-0 bg-white z-50">
      <div className="w-[80%] flex justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link to={"/"}>
          <img
            className="w-16"
            src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"
            alt="Company Logo"
          />
          </Link>
          <div className="flex items-center text-center gap-2">
            <p className="text-sx font-semibold border-b-2 border-black">
              others
            </p>
            <i className="fi fi-rr-angle-small-down mt-2 text-2xl text-orange-500"></i>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex items-center gap-11">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1"
              title={item.name} // Tooltip for better UX
            >
             <i className={`fi mt-1 ${item.icon}`}></i>
              <p className="font-semibold text-gray-500 hover:text-orange-500 cursor-pointer text-base">
                {item.name}
              </p>
            </div>
          ))}
         
        </nav>
      </div>
    </header>

    <Outlet/>
   </>
  );
}

export default Head;
