import { useEffect } from "react";
import { useState } from "react";

function Body() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0)

  async function fetchData() {
    const data = await fetch(
      "/api/dapi/restaurants/List/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(value)

  function handlePrev(){
  
    value <=0 ? "" : setValue((pre)=>pre-26)


  }

  function handleNext(){
    value >=104 ? "" :  setValue((pre)=>pre+26)
  }
  return (
    <>
      <div className="w-full">
        <div className="w-[80%] mx-auto  mt-3  overflow-hidden">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-2xl font-semibold">What on your mind?</h1>
            <div className="flex gap-4">
              <i onClick={handleNext} className="fi fi-rr-arrow-small-left h-10 w-10 bg-gray-200 rounded-full flex justify-center items-center text-black cursor-pointer text-2xl"></i>
              <i onClick={handlePrev} className="fi fi-rr-arrow-small-right h-10 w-10 bg-gray-200 rounded-full flex justify-center items-center text-black cursor-pointer text-2xl"></i>
            </div>
          </div>
          <div className="flex duration-1000" style={{translate: `-${value}%`}}>
            {data.map((item, index) => {
              return (
                <>
                
                    <img
                      className="w-28"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                    />
                 
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
