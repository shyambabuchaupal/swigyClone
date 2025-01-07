function Head() {
  return (
    <>
      <div className="w-full shadow-md h-20 flex justify-center items-center sticky top-0 bg-white z-50">
        <div className=" w-[80%] flex justify-between">
          <div className="flex items-center gap-4">
            <img
              className="w-16"
              src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"
              alt="img"
            />
            <div className="flex items-center text-center gap-2">
              <p className="text-sx font-semibold border-b-2 border-black">
                others
              </p>
              <i className="fi fi-rr-angle-small-down mt-2 text-2xl text-orange-500 "></i>
            </div>
          </div>
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <i className="fi fi-rr-box"></i>
              <p className="font-semibold">Swiggy Corporate</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fi fi-rr-search"></i>
              <p>Search</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fi fi-rs-badge-percent"></i>
              <p>Offers</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fi fi-sr-info"></i>
              <p>Help</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fi fi-ss-user-add"></i>
              <p>Sign in</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fi fi-rr-order-history"></i>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
