function Fold3() {
  return (
    <div className="bg-white ">
      <div className="flex max-w-[80vw] mx-auto items-center justify-center">
        <div className="flex flex-col lg:flex-row ">
          {/* Text Section */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-2xl text-[#2c2f55] mb-4">
              Joint surgeon, Dr. John Hahn believes he has discovered the
              secret. And he’s got
              <span className="font-bold ">
                {' '}
                hundreds of thousands of followers
              </span>
              , some even in their nineties, to prove it.
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
              sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper
              sem, in lobortis est. Cras pharetra vitae tellus quis commodo.
              Phasellus semper viverra purus, vel feugiat nunc venenatis et.
              Suspendisse nisi arcu, tristique dictum sollicitudin vel,
              facilisis at urna. Cras a vulputate risus. Nam venenatis enim et
              libero molestie tincidunt.
            </p>
            <p className="text-gray-600 mb-4">
              nunc leo, eget suscipit ex semper quis. Quisque mollis ornare
              consectetur. Cras facilisis sem erat, et facilisis ante dignissim
              in. Suspendisse ex libero, pellentesque ac tincidunt id, posuere
              vitae lorem. Aenean vitae tortor augue. Maecenas convallis sodales
              nulla vitae auctor. Mauris tincidunt auctor ante.
            </p>
            <p className="text-gray-600">
              nunc leo, eget suscipit ex semper quis. Quisque mollis ornare
              consectetur. Cras facilisis sem erat, et facilisis ante dignissim
              in. Suspendisse ex libero,
            </p>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 relative bg-green-100 flex items-center justify-center">
            <img
              src={'srcassetspexels-kindelmedia-7863089.jpg'}
              alt="Dr. John Hahn"
              className="fold3-polygon absolute inset-0 w-full h-full object-cover opacity-50 clipPath-doctor-polygon"
            />
            <div className="relative z-10 p-10 text-white text-center">
              <p className="italic mb-4">
                nunc leo, eget suscipit ex semper quis. Quisque mollis ornare
                consectetur. Cras facilisis sem erat, et facilisis ante
                dignissim in. Suspendisse ex libero, pellentesque ac tincidunt
                id,
              </p>
              <p className="font-semibold">Dr. John Hahn</p>
              <p>DPM, ND, America’s Joint Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fold3;
