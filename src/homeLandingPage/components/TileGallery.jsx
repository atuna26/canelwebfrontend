import ebatli from "../../assets/ebatli.jpg"

const TileGallery = () => {
  return (
     <section
              className={`flex flex-col w-full justify-center items-center gap-3`}
            >
              <h2 className="text-primary text-3xl  font-light font-abel">
                      <span className="border-t-2 border-l-2 pl-1">Ebatlı </span>
                      ve
                      <span className="border-b-2 border-r-2 pr-1"> Fayans</span>
                    </h2>
              <div className="flex flex-row w-full justify-center items-center gap-3 sm:pt-10 pt-3 px-5 ">
                <div className="relative w-full md:h-[450px] h-[250px] flex justify-center items-center overflow-hidden rounded-sm group">
                  <img
                    src={ebatli}
                    className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50 transition duration-300 ease-in-out"
                  />
                  <div className="flex flex-col justify-center items-center w-full h-full opacity-100 ">
                    
                    <button
                      type="button"
                className="z-10 text-white opacity-75 border rounded-sm mt-2 bg-primary focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-sm px-5 py-2.5 text-center mx-2 mb-2"
                    >
                      Tüm Fayansları Görüntüle
                    </button>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default TileGallery