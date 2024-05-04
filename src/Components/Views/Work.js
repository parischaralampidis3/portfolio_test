import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../../App.css";
function Work() {
  const paintings = [
    {
      title: "Adadjento",
      image: "../assets/images/project_images/painting_1.png",
      link: "/adadjento",
    },
    {
      title: "English Gallera",
      image: "../assets/images/project_images/painting_2.png",
      link: "/englishGallera",
    },

    {
      title: "Boat at the sunset",
      image: "../assets/images/project_images/painting_13.png",
      link: "/boat",
    },
    {
      title: "Ship Americo Vespouci",
      image: "../assets/images/project_images/painting_6.png",
      link: "/americoVespouci",
    },
    {
      title: "Russian sailing ship Shtandart",
      image: "../assets/images/project_images/painting_11.png",
      link: "/shtandart",
    },
    {
      title: "Here let me stand",
      image: "../assets/images/project_images/painting_7.png",
      link: "/letMeStand",
    },
    {
      title: "Dutch Sailing Ship 'Crescent' ",
      image: "../assets/images/project_images/painting_5.png",
      link: "/dutchShip",
    },

    {
      title: "Siberia Amur leopard",
      image: "../assets/images/project_images/painting_8.png",
      link: "/leopard",
    },
    {
      title: "What is this?",
      image: "../assets/images/project_images/painting_3.png",
      link: "/whatIsThis",
    },
    {
      title: "Charging Bull",
      image: "../assets/images/project_images/painting_18.png",
      link: "/chargingBull",
    },
    {
      title: "Deadly Bull",
      image: "../assets/images/project_images/painting_16.png",
      link: "/bull",
    },

    {
      title: "Ship on the open sea",
      image: "../assets/images/project_images/painting_19.png",
      link: "/ship",
    },
    {
      title: "Sea horse",
      image: "../assets/images/project_images/painting_15.png",
      link: "/seahorse",
    },

    {
      title: "Flamingos",
      image: "../assets/images/project_images/painting_9.png",
      link: "/flamingos",
    },
    {
      title: "Peackok",
      image: "../assets/images/project_images/painting_10.png",
      link: "/peackok",
    },

    {
      title: "Rooster in purple background",
      image: "../assets/images/project_images/painting_12.png",
      link: "/rooster",
    },

    {
      title: "Head of alexander",
      image: "../assets/images/project_images/painting_14.png",
      link: "/alexander",
    },

    {
      title: "Heart of Vezouvio",
      image: "../assets/images/project_images/painting_20.png",
      link: "/vezouvio",
    },
 

    {
      title: "Geisha",
      image: "../assets/images/project_images/painting_21.png",
      link: "/geisha",
    },
      {
      title: "Chinese noblewoman",
      image: "../assets/images/project_images/painting_24.png",
      link: "/chineseNoblewoman",
    },
    {
      title: "Egyptian Slave",
      image: "../assets/images/project_images/painting_23.png",
      link: "/egyptianSlave",
    },
  
 
   
    {
      title: "Tree with fallen flowers",
      image: "../assets/images/project_images/painting_26.png",
      link: "/tree",
    },
         {
      title: "Reflection",
      image: "../assets/images/project_images/painting_25.png",
      link: "/reflection",
    },
    {
      title: "Road to Emmaus",
      image: "../assets/images/project_images/painting_17.png",
      link: "/oliveField",
    },
       {
      title: "Gustav to Froyd",
      image: "../assets/images/project_images/painting_4.png",
      link: "/gustavToFroyd",
    },
        {
      title: "Nude",
      image: "../assets/images/project_images/painting_27.png",
      link: "/nude",
    },

  ];
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();

  const n = 5;

  useEffect(() => {
    setFilterData(
      paintings.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page, paintings]);

  return (
    <div className="container-fluid  w-full h-full">
      <div>
        <div className=" grid grid-cols-0  md: grid-cols-0  text-cyan-900 bg-white rounded-lg lg:grid-cols-2 p-14">
          {filterData &&
            filterData.map((item, index) => (
              <div class="" key={item.title}>
                <h1 className="text-center w-full mt-16 p-5 text-2xl font-semibold mb-4">
                  {item.title}
                </h1>
                <img
                  className="bg-cyan-500 shadow-lg  lg: w-2/4 mx-auto shadow-gray-300/50"
                  src={item.image}
                  alt="painting"
                />
                <a
                  className="rounded-lg w-2/4 p-6 mt-16 mx-auto block bg-blue-500 text-center text-white font-semibold lg:w-2/4 p-4 lg:p-5"
                  href={item.link}
                >
                  {item.title}
                </a>
              </div>
            ))}
        </div>
        <div className="flex mt-12 mb-12 mx-auto ">
          <ReactPaginate
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            activeClassName={"active"}
            onPageChange={(event) => setPage(event.selected)}
            pageCount={Math.ceil(paintings.length / n)}
            breakLabel="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
