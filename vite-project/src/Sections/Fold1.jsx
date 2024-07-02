import Button from '../Components/Button';
import { GiCrossedBones } from 'react-icons/gi';

function Fold1() {
  return (
    <div className="grid grid-cols-2 max-w-[80vw] m-auto">
      <div className="flex flex-col gap-7 pt-16 pb-12">
        <h1 className="font-extrabold text-4xl max-w-[70%]">
          Clinically-proven joint nutrition
        </h1>
        <h3>
          Stop the misery and reclaim your mobility with Smarter Joint Food
        </h3>
        <div className="grid grid-cols-2 max-w-[70%] font-medium text-base gap-4">
          <div className="flex gap-3 items-center">
            <GiCrossedBones />
            <p>RELIEVES JOINT DISCOMFORT</p>
          </div>
          <div className="flex gap-3 items-center">
            <GiCrossedBones />
            <p>RESULTS STARTING IN JUST 2 WEEKS</p>
          </div>
          <div className="flex gap-3 items-center">
            <GiCrossedBones />
            <p>NOURISHES JOINT CARTILAGE</p>
          </div>
          <div className="flex gap-3 items-center">
            <GiCrossedBones />
            <p>PROMOTES JOINT FLEXIBILITY</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="primary">BUY NOW</Button>
          <Button variant="secondary">LEARN MORE &#11167;</Button>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Fold1;
