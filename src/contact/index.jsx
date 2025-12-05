import contactbg from "../assets/contactbg.jpg";

const Contact = () => {

  return (
     <div className="flex flex-col gap-10 w-full">
      <div className="h-[150px] w-full bg-primary flex justify-center items-center">
        <h2 className="text-white text-3xl font-light font-abel">
          {" "}
          <span className="">Contact</span>

        </h2>
      </div>
      <section
        id="contact"
        className="relative w-full flex justify-between items-start text-white col-span-2"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${contactbg})`,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative flex w-full justify-between items-start">
          {/* Adres Bilgileri */}
          <div className="flex w-[50%] flex-row justify-between flex-wrap p-5 pt-10 gap-y-5">
            <div className="flex w-[50%] flex-col items-start gap-3">
              <h2 className="flex items-center gap-2">
                <i className="fa-regular fa-building text-2xl"></i>
                <span className="text-white text-3xl font-light font-abel">
                  Genel Merkez
                </span>
              </h2>
              <p className="text-gray-300">
                Demiryolu Cd. No:26 <br /> Yeşilköy - İstanbul
              </p>
              <p className="text-gray-300">Tel : +90 212 574 20 20</p>
              <p className="text-gray-300">Fax : +90 212 574 00 26</p>
            </div>
            <div className="flex w-[50%] flex-col items-start gap-3">
              <h2 className="flex items-center gap-2">
                <i className="fa-solid fa-industry text-2xl"></i>
                <span className="text-white text-3xl font-light font-abel">
                  M.Kemalpaşa Fabrika
                </span>
              </h2>
              <p className="text-gray-300">
                Sincansarnıç Köyü Söğütalan
                <br />
                M.Kemalpaşa - Bursa
              </p>
              <p className="text-gray-300">Tel : +90 224 631 60 39</p>
              <p className="text-gray-300">Fax : +90 224 631 60 39</p>
            </div>
            <div className="flex w-[50%] flex-col items-start gap-3">
              <h2 className="flex items-center gap-2">
                <i className="fa-solid fa-industry text-2xl"></i>
                <span className="text-white text-3xl font-light font-abel">
                  Bandırma Fabrika
                </span>
              </h2>
              <p className="text-gray-300">
                Balıkesir Yolu 30.Km <br /> Bandırma - Balıkesir
              </p>
              <p className="text-gray-300">Tel : +90 266 725 15 55</p>
              <p className="text-gray-300">Fax : +90 266 725 15 99</p>
            </div>
            <div className="flex w-[50%] flex-col items-start gap-3">
              <h2 className="flex items-center gap-2">
                <i className="fa-solid fa-mound text-2xl"></i>
                <span className="text-white text-3xl font-light font-abel">
                  Gönen Ocak
                </span>
              </h2>
              <p className="text-gray-300">
                Fındıklı Mah. Otlucaklar Mevkii <br /> Gönen - Balıkesir
              </p>
              <p className="text-gray-300">Tel : +90 224 631 60 39</p>
              <p className="text-gray-300">Fax : +90 224 631 60 40</p>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="w-[50%] p-10 relative">
            <form className="flex flex-col gap-4 bg-white/10 backdrop-blur-md border border-white border-opacity-10 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-xl font-semibold text-white mb-4">
                Size ulaşalım...
              </h2>

              <input
                type="text"
                placeholder="İsim"
                className="bg-white/30 text-white placeholder-white border border-white border-opacity-50 p-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />

              <input
                type="email"
                placeholder="E-mail"
                className="bg-white/30 text-white placeholder-white border border-white border-opacity-50 p-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />

              <input
                type="text"
                placeholder="Konu"
                className="bg-white/30 text-white placeholder-white border border-white border-opacity-50 p-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />

              <textarea
                placeholder="Mesaj"
                rows="5"
                className="bg-white/30 text-white placeholder-white border border-white border-opacity-50 p-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>

              <button
                type="submit"
                className="bg-white/30 text-white border border-white border-opacity-50 py-3 px-6 rounded hover:bg-white/40 transition-all duration-200"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
