function Fold3() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="flex max-w-[80vw] mx-auto items-center justify-center">
        <div className="flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-2xl text-[#2c2f55] mb-4">
              Joint surgeon, Dr. John Hahn believes he has discovered the
              secret. And he's got
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
              in. Suspendisse ex libero.
            </p>
          </div>

          {/* Image Section */}
          {/* <div className="lg:w-1/2 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-green-500 rounded-xl transform -skew-y-6"></div>
            <img
              src="src/assets/doctor.png"
              alt="Dr. John Hahn"
              className="relative z-10 w-2/3 mx-auto"
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
          </div> */}
          <div className='shape h-96 w-[50vw]  rounded-[3.5rem] skew-y-6 absolute -right-40 top-20'>
            <img
              src='src/assets/doctor.png'
              alt='Dr. John Hahn'
              className='absolute h-[20rem] mx-auto bottom-0'
            />
            <div>
              <p className='text-right w-44 absolute left-[35%] top-[20%] leading-4 text-sm text-gray-700 -skew-y-6'>
                Lorem ipsum dolor, sit amet csectetur aaspisicing elit. Autm opo
                dicta raone ipsum nemo aspernatur obcaecati iure.
              </p>

              <p className='text-right w-44 absolute left-[35%] top-[55%] leading-4 text-sm font-semibold text-gray-800 -skew-y-6'>
                Dr. John Hahn <br />
                DPM, ND, America’s
                <br />
                Joint Doctor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fold3;
