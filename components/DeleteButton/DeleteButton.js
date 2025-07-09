import { Button } from "./DeleteButton.style";
import PlayAnimationOnHover from "@/utils/animation";
import BinIcon from "../../public/lotties/BinIcon.json";

const style = {
  height: 40,
  width: 40,
};

const options = {
  animationData: BinIcon,
  loop: true,
  autoplay: false,
};

export default function DeleteButton({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      <PlayAnimationOnHover style={style} options={options} />
    </Button>
  );
}
