import { useDispatch, useSelector } from "react-redux";
import contactbg from "../assets/contactbg.jpg";
import { setCompareProduct } from "../state";
import { useEffect } from "react";
import {useSearchParams} from "react-router-dom"

const Compare = () => {
  const compareProduct = useSelector((state) => state.compareProduct);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const compareItems = searchParams.getAll("compareItems");

  const getProduct = async () => {
    console.log("compareItems", compareItems);
    const arrayIds = compareItems.join(",");
    const response = await fetch(
      `https://canelwebbackend.onrender.com/product/product-list/compare/${arrayIds}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setCompareProduct(data));
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="h-[150px] w-full bg-primary flex justify-center items-center">
        <h2 className="text-white text-3xl font-thin">
          Birlikte Gör
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center bg-primary text-white min-w-[500px] rounded shadow-lg">
        {/* <h1 className="text-lg p-2">Karşılaştırma Listesi</h1>
                    <hr className="border-b border-secondary w-full" /> */}
        {compareProduct.map((item) => (
          <div
            key={item._id}
            className="flex flex-col justify-between items-center w-full p-1 border-r border-gray-400"
          >
            <div className="relative w-full flex justify-center items-center">
              <img
                src={`https://canelwebbackend.onrender.com/uploads/${item.imagePath[0]}`}
                alt={item.name}
                className="w-[250px] my-2 h-[250px] rounded"
              />
              <i
                onClick={() => deleteItem(item)}
                className="fa-solid fa-trash text-sm cursor-pointer text-white absolute top-0 right-0 m-2"
              ></i>
            </div>

            <hr className="border-b opacity-25 border-gray-400 w-full" />
            <p className="text-sm font-light my-2">{item.code}</p>
            <hr className="border-b opacity-25 border-gray-400 w-full" />
            <p className="text-sm font-light  my-2">{item.type.join(" ")}</p>
            <hr className="border-b opacity-25 border-gray-400 w-full" />
            <p className="text-md font-semibold  my-2">{item.name}</p>
            <hr className="border-b opacity-25 border-gray-400 w-full" />
            <p
              onClick={() => deleteItem(item)}
              className="text-sm cursor-pointer text-info  my-2"
            >
              Detaylı incele
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
