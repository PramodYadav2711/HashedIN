/* eslint-disable react/no-unescaped-entities */
import Button from '../Components/Button';

function Fold2() {
  const image = 'https://placehold.co/400';
  return (
    <div className="bg-[#2c2f55]">
      <div className=" grid grid-cols-2 max-w-[80vw] mx-auto  text-white py-12 px-6">
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-full flex items-center justify-center">
              <img src={image} alt="Stretching" className="w-3/4" />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <img src={image} alt="Running" className="w-3/4" />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <img src={image} alt="Biking" className="w-3/4" />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <img src={image} alt="Group Exercise" className="w-3/4" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Doctor's Secret to Living Ache-Free and Mobile for Life...
          </h1>
          <h4 className="text-xl font-semibold text-[#a0c717] mt-4">
            FEED YOUR JOINTS DAILY!
          </h4>
          <p className="text-base mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper sem,
            in lobortis est. Cras pharetra vitae tellus quis commodo. Phasellus
            semper viverra purus, vel feugiat nunc venenatis et. Suspendisse
            nisi arcu, tristique dictum sollicitudin vel, facilisis at urna.
            Cras a vulputate risus. Nam venenatis.
          </p>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Fold2;
