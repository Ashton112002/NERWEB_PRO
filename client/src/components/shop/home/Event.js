import React from "react";
import Image1 from "../../../Assets/event1.png";
import Image2 from "../../../Assets/event2.png";
import Image3 from "../../../Assets/event3.png";
import Image4 from "../../../Assets/event4.png";
import EventBanner from "../../../Assets/eventbanner.png";
import Footer from "../partials/Footer";
import { Navber } from "../partials";
const Event = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  return (
    <>
      <Navber />
      <div className="w-full h-screen relative">
        <img
          className="top-0 left-0 w-full h-[550px] md:h-screen object-cover"
          src={EventBanner}
          alt="/"
        />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-[77%] md:h-screen" />
        <div className="absolute top-10 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-autxo absolute p-4 w-2/3 -mt-[30%] md:w-full md:-mt-[0%]">
            <h4 className="font-bold text-[#F0F8FF] text-3xl md:text-5xl drop-shadow-2xl">
              Our Awesome Events!
            </h4>

            <p className="max-w-[600px] drop-shadow-2xl py-2 text-lg md:text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut
              quis est, id consequuntur sequi ipsum vitae sit non
              exercitationem.
            </p>
            <div className="mt-10">
              <div className="mt-4">
                <button className="font-bold border border-1 text-slate-200 hover:bg-[#679641] cursor-pointer px-4 py-2 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-50 flex flex-col md:flex-row items-start py-5 md:py-20 sm:py-10 -mt-[20%] md:-mt-20">
        <div className="w-full md:w-4/5 bg-white flex flex-col p-5 md:p-20">
          <h1 className="text-center text-2xl p-2 md:p-5">DESCRIPTIONS</h1>
          <div className="text-justify font-light">
            <p>
              Nanay Estrella's Restaurant, located in Bogtongbod, Clarin, Bohol,
              Philippines, is a popular venue for hosting wedding receptions.
              The restaurant offers a beautiful ambiance, attentive staff, and a
              delicious menu, making it an ideal choice for special occasions
              such as weddings, birthday parties, family celebrations, and debut
              events. The restaurant is situated in a calm and charming spot,
              providing a lovely setting for hosting weddings that will be
              remembered for a lifetime. The peaceful atmosphere, coupled with
              the restaurant's beautiful surroundings, creates a magical
              environment that adds a touch of enchantment to your big day.
              Nanay Estrella's Restaurant goes above and beyond to create an
              exceptional experience for couples and their guests. They
              understand that special moments deserve to be celebrated in style,
              and they strive to make every event memorable. The combination of
              natural beauty, friendly service, and delectable food sets the
              stage for a celebration you'll never forget. Whether you're
              planning a romantic wedding reception, a joyful birthday party, a
              heartwarming family gathering, or a glamorous debut celebration,
              Nanay Estrella's Restaurant provides the perfect setting to create
              lasting memories. The restaurant's dedicated staff will work
              closely with you to ensure that every detail is taken care of,
              allowing you to relax and enjoy your special day. At Nanay
              Estrella's Restaurant, they believe in the power of special
              moments. They understand that when loved ones come together,
              ordinary moments can transform into extraordinary memories. The
              restaurant's commitment to excellence shines through in every
              aspect of their service, from the beautiful location to the
              thoughtful and attentive staff. In summary, Nanay Estrella's
              Restaurant in Bohol, Philippines, is a fantastic choice for
              hosting wedding receptions and other special events. With its
              picturesque setting, exceptional service, and delicious cuisine,
              it offers an unforgettable experience for you and your guests.
            </p>
          </div>
        </div>
        <div className="w-1/4 md:w-1/5 pt-[13%] bg-white t-50 b-0 h-100 flex flex-col ml-[35%] md:-ml-[3%]">
          <div className="flex flex-col mt-[20px]">
            <button
              type="submit"
              className="mb-10 bg-[#C07936] w-40 h-12 hover:bg-[#679641] cursor-pointer m-auto text-white text-md font-medium text-center py-1 rounded-full -mt-10 md:mt-4 transition ease-in-out delay-150 bg-[#C07936] hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300"
            >
              Book Events Now!!!
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">WEDDING RECEPTIONS</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Congratulations to Rai and Gen on their wedding reception at
                    Nanay Estrella's Restaurant on May 22, 2023! Located in
                    Bogtongbod, Clarin, Bohol, Philippines, Nanay Estrella's
                    Restaurant is the perfect venue for couples looking to
                    create unforgettable memories on their special day. With its
                    beautiful ambiance, attentive staff, and delicious menu
                    options, the restaurant provides an exceptional setting for
                    a truly memorable wedding reception. From the serene
                    surroundings to the personalized service, Nanay Estrella's
                    Restaurant ensures that every detail is taken care of,
                    allowing Rai and Gen to celebrate their love surrounded by
                    their loved ones in a magical atmosphere.
                    <br></br>
                    If you're interested in our event services, please contact
                    us for more information. Nanay Estrella's Restaurant is
                    located at Bogtongbod, Clarin, Bohol, Philippines and our opening hours are
                    Monday-Saturday 7 AM - 9 PM. We look forward to helping you plan
                    and host a fantastic event that will be remembered
                    for years to come.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal1 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    CATHY 18th BIRTHDAY PARTY
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal1(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Cathy's 18th birthday party at Nanay Estrella's Restaurant
                    on July 29, 2023, was a truly special occasion. Dressed in a
                    stunning pink gown, Cathy celebrated surrounded by her
                    supportive family and friends. The venue was beautifully
                    decorated, creating a magical atmosphere for the
                    festivities. Nanay Estrella's Restaurant provided
                    exceptional service, ensuring that every detail was taken
                    care of. The celebration was filled with heartfelt speeches,
                    laughter, and delicious food, creating cherished memories
                    that Cathy and her loved ones will treasure for a lifetime.
                    Cathy's 18th birthday party at Nanay Estrella's Restaurant
                    was a memorable event. With its enchanting ambiance,
                    attentive staff, and beautiful decorations, the venue
                    provided the perfect setting for a joyous celebration.
                    Cathy's family and friends came together to show their love
                    and support, creating an unforgettable experience that
                    marked a significant milestone in her life.
                    <br></br>
                    If you're interested in our event services, please contact
                    us for more information. Nanay Estrella's Restaurant is
                    located at Bogtongbod, Clarin, Bohol, Philippines and our opening hours are
                    Monday-Saturday 7 AM - 9 PM. We look forward to helping you plan
                    and host a fantastic event that will be remembered
                    for years to come.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">FAMILY CELEBRATION</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal2(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    A small family celebration at Nanay Estrella's Restaurant is
                    a wonderful way to create lasting memories with your loved
                    ones. The restaurant offers a cozy and inviting atmosphere,
                    perfect for intimate gatherings. The attentive staff ensures
                    that every family member feels welcomed and taken care of,
                    providing a seamless and enjoyable experience. With a
                    delicious menu featuring a variety of options, you can savor
                    a delightful meal together, celebrating and cherishing the
                    special moments shared with your family. Nanay Estrella's
                    Restaurant provides the ideal setting for a small family
                    celebration filled with love, laughter, and togetherness.
                    <br></br>
                    If you're interested in our event services, please contact
                    us for more information. Nanay Estrella's Restaurant is
                    located at Bogtongbod, Clarin, Bohol, Philippines and our opening hours are
                    Monday-Saturday 7 AM - 9 PM. We look forward to helping you plan
                    and host a fantastic event that will be remembered
                    for years to come.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal2(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal3 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">BIRTHDAY PARTIES</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal3(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Birthday parties at Nanay Estrella's Restaurant are a
                    delightful experience for both kids and adults. The
                    restaurant offers a vibrant and festive atmosphere, perfect
                    for hosting a fun-filled celebration. From personalized
                    decorations to attentive service, the dedicated staff goes
                    above and beyond to ensure that every detail is taken care
                    of, making the birthday celebrant feel special and creating
                    a memorable experience for all guests. With a diverse menu
                    featuring delicious options for all tastes and dietary
                    preferences, Nanay Estrella's Restaurant provides a culinary
                    delight that adds to the joy of the celebration. Whether
                    it's a themed kids' party or an elegant adult gathering, the
                    restaurant's comfortable and spacious setting accommodates
                    your needs, making it the ideal venue for a memorable and
                    enjoyable birthday party. Nanay Estrella's Restaurant takes
                    pride in creating unforgettable birthday celebrations.
                    <br></br>
                    If you're interested in our event services, please contact
                    us for more information. Nanay Estrella's Restaurant is
                    located at Bogtongbod, Clarin, Bohol, Philippines and our opening hours are
                    Monday-Saturday 7 AM - 9 PM. We look forward to helping you plan
                    and host a fantastic event that will be remembered
                    for years to come.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal3(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="w-full h-screen p-1 md:p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image1}
            alt=""
            className="object-contain rounded-lg h-[400px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-20 md:mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-2xl md:text-[2rem]">
            WEDDING RECEPTIONS
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-1 md:p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image2}
            alt=""
            className="object-contain rounded-lg h-[400px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-20 md:mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-2xl md:text-[2rem]">
            CATHY 18th BIRTHDAY PARTY
          </p>
          <button
            onClick={() => setShowModal1(true)}
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-1 md:p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image3}
            alt=""
            className="object-contain rounded-lg h-[400px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-20 md:mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-2xl md:text-[2rem]">
            FAMILY CELEBRATION
          </p>
          <button
            onClick={() => setShowModal2(true)}
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-1 md:p-20 flex flex-col md:flex-row md:mb-[5%]">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image4}
            alt=""
            className="object-contain rounded-lg h-[400px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-20 md:mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-2xl md:text-[2rem]">
            BIRTHDAY PARTIES
          </p>
          <button
            onClick={() => setShowModal3(true)}
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300"
          >
            LEARN MORE
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Event;
