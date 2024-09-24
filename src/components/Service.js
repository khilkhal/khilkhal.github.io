import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";
import CalendlyEmbed from "./CalendlyEmbed";

const Service = () => {
  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "assets/img/news/1.jpg",
      icon: "assets/img/svg/3d.svg",
      text: "This is a perfect starting position for beginner Oud Musicians.",
      date: "",
      title: "6 Lesson Package ",
      text1:
        "This beginner package is designed for students who have never played the Oud before. The package includes 6 lessons, each lesson is 1 hour and 15 minutes  long. The lessons will cover the basics of Oud playing, including how to hold the Oud, and how to play basic songs. The lessons will be taught in English and Arabic .",
      text2:
        "Oud parts, and types\n- Sitting and body position\n\n- Naming the strings\n\n- Oud picks and how to hold\n\n- tuning the Oud\n\n- Right hand and first exercises\n\n- Left hand and thumb position\n\n- Left hand finger exercises\n\n- Musical scale\n\n- Exercises on the musical scale ($300)",
      text3:
        "-         اجزاء العود-         الجلسة ووضعية الجس-         تسمية الأوتار-         نوع الريشة وطريقة المسك-         الدوزان واستخدام التونر-         اليد اليمنى والتمارين الأولى-         اليد اليسرى ووضعية الإبهام-         تمارين أصابع اليد اليسرى-         السلم الموسيقي-         تمارين على السلم الموسيقي",
    },
    {
      img: "assets/img/news/3.jpg",
      icon: "assets/img/svg/character.svg",
      text: "This is a comprehensive course that will guide students to become advanced Oud players.",
      date: "August 9, 2021",
      title: "24 Lesson  Package ($1000)",
      text1:
        "This package will teach the more advanced techniques of playing the Oud. We recommend this package for those who have learned the basics of Oud and want to take their skills to the next level.",
      text2:
        "Oud parts, and types\n- Sitting and body position\n\n- Naming the strings\n\n- Oud picks and how to hold\n\n- tuning the Oud\n\n- Right hand and first exercises\n\n- Left hand and thumb position\n\n- Left hand finger exercises\n\n- Musical scale\n\n- Exercises on the musical scale \n Up and Down Picks \n\n -Maqamat \n\n -Musical Pitches, Bemol, Diez \n\n - Maqam Ajam \n\n -Maqam Rest \n\n -Excersizes + \n\n The second position of the left hand \n\n - Quarter Tone Pitch, Maqamat with Quarter tone pitch \n\n -Musical Improvisation (Taqsim) \n\n -Singing with the Oud \n\nRhythm using Monotron \n\n -The basics of musical notation ",
      text3:
        "الدروس الـ 14 الأولى يضاف إليها 10 دروس هي:-         الوضعية الثانية لليد اليسرى-         التون وربع التون-         التقاسيم، الدولاب، الجمل الموسيقية-         الغناء على العود-         الإيقاع، المونوتروم-         أساسيات النوطة",
    }
    
    
      
  ];

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Lessons
              </span>
            </div>
            <p>All lessons can be tought in English or Arabic, and are available in person or online via Zoom, Skype or Facetime.</p>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt="image"
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt="image"
                      />
                    </div>
                  </li>
                ))}
                {/*
                  Add this to list above
                
                {
                  img: "assets/img/news/2.jpg",
                  icon: "assets/img/svg/play.svg",
                  text: "This package allows students to learn the basics of Oud playing, and move on to more advanced techniques.",
                  date: "August 9, 2021",
                  title: "14 Lesson  Package (2 lessons for free)",
                  text1:
                    "This package is best for those looking to learn the basics and move onto advanced techniques. The package includes 14 lessons, each lesson is 1 hour and 15 minutes long. ",
                  text2:
                    "Package 1 + \n\n Up and Down Picks \n\n -Maqamat \n\n -Musical Pitches, Bemol, Diez \n\n - Maqam Ajam \n\n -Maqam Rest \n\n -Excersizes ($600)",
                  text3:
                    "الدروس الـ 6 الأولى، يضاف إليها 8 دروس هي:-         الريشة الصاعدة والنازلة-         تمارين الريشة-         الدرجات الموسيقية، البيكار والبيمول والدييز-         المقامات، الجنس والفرع-         مقام العجم-         مقام الرست-         تمارين",
                },


                <li className="mb-[50px] w-1/2 pl-[50px]" >
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src="assets/img/svg/3d.svg"
                        alt="image"
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        Schedule your lessons below!
                      </h3>
                      
                      <p className="text transition-all duration-300">
                        
                      </p>
                      
                      {/* Modalbox Info Start 
                      
                    </div>
                  </li>*/ }
                  <CalendlyEmbed url="https://calendly.com/skhilkhal"></CalendlyEmbed>
                  
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  {/*Uncomment below for the images*/}
                  {/*<div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={modalContent.img}
                      style={{
                        backgroundImage: `url(${modalContent.img})`,
                      }}
                    />
                  </div>*/}
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <strong><p className="mb-[15px]">{modalContent.text2}</p></strong>
                    <p dir="rtl">{modalContent.text3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Service;
