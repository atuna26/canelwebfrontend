import { useState } from "react";
import factoryPhoto from "../assets/factoryPhoto.jpg";
import bandirmaA from "../assets/bandirmaA.jpg";
import bandirmaB from "../assets/bandirmaB.jpg";
import bandirmaC from "../assets/bandirmaC.jpg";
import bandirmaD from "../assets/bandirmaD.jpg";
import bandirmaE from "../assets/bandirmaE.jpg";
import bandirmaF from "../assets/bandirmaF.jpg";
import bandirmaG from "../assets/bandirmaG.jpg";
import bandirmaH from "../assets/bandirmaH.jpg";

const Factories = () => {

   const [selectedImage, setSelectedImage] = useState(null);
    const images = [
       {id:0,src:bandirmaA, alt:"Bandirma Maden Fabrikasi"},
      {id:1,src:bandirmaB, alt:"Bandirma Maden Fabrikasi"},
      {id:2,src:bandirmaC, alt:"Bandirma Maden Fabrikasi"},
      {id:3,src:bandirmaD, alt:"Bandirma Maden Fabrikasi"},
      {id:4,src:bandirmaE, alt:"Bandirma Maden Fabrikasi"},
      {id:5,src:bandirmaF, alt:"Bandirma Maden Fabrikasi"},
      {id:6,src:bandirmaG, alt:"Bandirma Maden Fabrikasi"},
      {id:7,src:bandirmaH, alt:"Bandirma Maden Fabrikasi"},
    ]
  
    const openModal = (image) => {
      setSelectedImage(image);
    }
  
    const closeModal = () => {
      setSelectedImage(null);
    }
  return (
    <div className="flex flex-col gap-1 w-full">
      <div   style={{
              backgroundImage: `url(${factoryPhoto})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }} className="h-[150px] w-full bg-primary flex justify-center items-center">
        <h2  className="text-white text-3xl font-light font-abel">
          <span className="border-t-2 border-l-2 pl-1">Fabrikalar</span>
        </h2>
      </div>
      <div className="flex flex-col gap-5 w-full">
       
        <p>
          Balıkesir yolu 30. Km üzerindeki Bandırma fabrikamız, Aksakal Bandırma
          bölgesinde yer almaktadır. 10.000 m2 kapalı ve 500.000 m2 açık alana
          ve 500.000 m2 yıllık üretim kapasitesine sahiptir. Bandırma
          fabrikamızda fayans, plaka, son teknoloji makinalarımızda ISO kalite
          standartları çerçevesinde üretilmektedir
        </p>
        <p className="font-bold">Makine Parkımız </p>
        <p>
          4 katrak
          <br />
          4 st
          <br />
          2 köprü kesme
          <br />
          2 fayans hattı
          <br />
          1 plaka epoksi hattı
          <br />
          1 fayans epoksi hattı
          <br />
          4 adet yarma
          <br />
          3 eskitme makinası
          <br />
          2 forklift
          <br />
        </p>
      </div>

      <div className='flex justify-between items-center flex-wrap gap-5 pb-5'>
          {images.map((image) => (
            <img key={image._id} src={image.src} alt={image.alt} loading="lazy" className='md:w-[300px] md:h-[300px] w-[250px] h-[250px] shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer' 
              onClick={() => openModal(image)}
            />
          ))}
        </div>


        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] object-contain mx-auto" />
          </div>
        )}
    </div>
  );
};

export default Factories;
