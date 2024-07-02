import Showcase from '../Components/Showcase';

function Fold4() {
  return (
    <div className="bg-white">
      <div className="max-w-[70vw] mx-auto ">
        <div className="flex flex-col gap-4 text-center">
          <p>SMARTER JOINT FOOD</p>
          <p>The Only Complete Joint Nutrition Supplement</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper sem,
            in lobortis est. Cras pharetra vitae tellus quis commodo. Phasellus
            semper viverra purus, vel feugiat nunc venenatis et. Suspendisse
            nisi arcu
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 grid-rows-3 gap-12">
            <div>
              <Showcase
                heading={'WHOLE COLLAGEN'}
                content={
                  'The main component of catilage, ligaments, and tendons'
                }
              />
            </div>
            <div>
              <Showcase
                heading={'MSM'}
                content={
                  'This natural form of organic sulfur is found throughout the body and key to healthy collagen. It also breakup unhealthy calcium deposits'
                }
              />
            </div>
            <div>
              <Showcase
                heading={'VITAMIN C'}
                content={
                  'This essential antioxidant is necessary for collagen rejuvenation and helps protect joint tissue against oxidative stress too'
                }
              />
            </div>
            <div className="row-start-2">
              <Showcase
                heading={'TURMERIC'}
                content={
                  'This well studied Indian spice has been used for centuries to help relieve joint discomfort and inflammation'
                }
              />
            </div>
            <div className="row-start-2">
              <Showcase
                heading={'BROMELAIN'}
                content={
                  'This enzyme from pineapples helps breakdown the unhealthy proteins caused by inflammation'
                }
              />
            </div>
            <div className="row-span-2 row-start-2">
              <img src="/src/assets/bottle.webp" />
            </div>
            <div className="row-start-3">
              <Showcase
                heading={'CMO'}
                content={
                  'A unique fatty acid referred to as the WD-40 of joint lubrication to relieve and lubricate the joints'
                }
              />
            </div>
            <div className="row-start-3">
              <Showcase
                heading={'LIPASE'}
                content={
                  'An enzyme that helps the ensure the CMO is more fully absorbed by the joints for improved lubrication'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fold4;
