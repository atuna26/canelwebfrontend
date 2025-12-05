import { useDispatch, useSelector } from 'react-redux'
import newMachine from '../../assets/newMachine.jpeg'
import pandrosa from '../../assets/pandrosa.jpeg'
import { setNews } from '../../state';
import { useEffect } from 'react';
const News = () => {
    const news = useSelector((state) => state.news);
    const dispatch = useDispatch();

    const getNews = async () => {
        const response = await fetch(`https://canelwebbackend.onrender.com/new/new-list`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json();
        dispatch(setNews(data));
    }

    useEffect(() => {
        getNews();
    },[])

  return (
    <section className="flex flex-col col-span-2 bg-black w-full items-start gap-3 pt-5 overflow-hidden">
        <h2 className='text-white text-3xl font-light font-abel self-center'> <span className="border-t-2 border-l-2 pl-1">Canel'den</span><span className="border-b-2 border-r-2 pr-1"> Haberler</span> </h2>
        <div className="flex flex-row items-center gap-3 py-3 mx-5">
            {news.slice(0,4).map((item) => (
                <div key={item._id} className="relative w-[350px] h-[220px] flex justify-center items-end overflow-hidden rounded-lg">
                    <img
                        src={`https://canelwebbackend.onrender.com/uploads/${item.imagePath}`}
                        alt={item.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 w-full h-[50%] bg-black bg-opacity-50 p-2 flex flex-col justify-start">
                        <p className="text-white font-semibold text-xl font-poppins">{item.title}</p>
                        <p className="text-white text-sm font-poppins">{item.shortText}</p>
                    </div>
                    </div>

               
            ))}
        </div>

    </section>
  )
}

export default News