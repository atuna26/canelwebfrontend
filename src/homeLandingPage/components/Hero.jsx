import cnlbanner from "../../assets/cnlbanner.png";
import bannerVideo from "../../assets/bannerVideo.mp4";
import testVideo from "../../assets/testVideo.mp4";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }
  , [videoRef]);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
     // Ekran genişliğini kontrol et
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 1060); 
     };
     handleResize();
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

  return (
    <section className={`flex flex-col col-span-2 z-10 w-full justify-center items-center`}>
     
      <div className="w-full flex justify-end">
        {/* <img
          src={cnlbanner}
          className="shadow-2xl w-full brightness-90"
          alt=""
          loading="lazy"
        /> */}
        <video
        className="shadow-2xl w-full brightness-90"
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
      >
        <source src={testVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>

<div className="w-full mx-auto mt-6 mb-10 space-y-2 px-4">
  <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-primary font-sans uppercase md:text-left text-center animate-fade-in">
    YENİLENEBİLİR ENERJİYLE
  </h2>

  <div className="flex justify-center">
    <h1
      className="text-5xl md:text-6xl font-extrabold tracking-wider text-primary uppercase md:translate-x-20 translate-x-0 drop-shadow-md"
    >
      CANEL
    </h1>
  </div>

  <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-primary font-sans uppercase md:text-right text-center animate-fade-in delay-200">
    ÇOK DAHA GÜÇLÜ
  </h2>
</div>






      {/* {isMobile && (
        <div className="flex flex-col justify-between items-center h-[300px] w-full px-5 relative ">
        <svg
          width="100%"
          height="100%"
          style={{ position: "relative", top: 0, left: 0 }}
        >
          <defs>
            <mask id="text-mask">
             
              <text
                x="50%"
                y="20%"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                YENİLENEBİLİR
              </text>
              <text
                x="50%"
                y="35%"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                ENERJİYLE
              </text>

             
              <text
                x="50%"
                y="55%"
                fontSize="90"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                CANEL
              </text>

              <text
                x="50%"
                y="73%"
                fontSize="50" 
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                ÇOK DAHA
              </text>
              <text
                x="50%"
                y="88%"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                GÜÇLÜ
              </text>
            </mask>
          </defs>
          

          <foreignObject width="100%" height="100%" mask="url(#text-mask)">
            <video
              src={bannerVideo}
              autoPlay
              ref={videoRef}
              loop
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </foreignObject>
        </svg>
      </div>
      )}
      {!isMobile && (<div className="flex flex-col justify-between items-center h-[200px] w-full px-5 relative ">
        <svg
          width="100%"
          height="100%"
          style={{ position: "relative", top: 0, left: 0 }}
        >
          <defs>
            <mask id="text-mask">
             
              <text
                x="25%"
                y="20%"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                YENİLENEBİLİR ENERJİYLE
              </text>

             
              <text
                x="55%"
                y="50%"
                fontSize="90"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                CANEL
              </text>

              
              <text
                x="80%"
                y="75%"
                fontSize="50"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                ÇOK DAHA GÜÇLÜ
              </text>
            </mask>
          </defs>
          

          <foreignObject width="100%" height="100%" mask="url(#text-mask)">
            <video
              src={bannerVideo}
              autoPlay
              ref={videoRef}
              loop
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </foreignObject>
        </svg>
      </div>
        )} */}
      
      
      
      
   
    </section>
  );
};

export default Hero;
