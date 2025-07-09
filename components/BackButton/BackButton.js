
import { useRouter } from "next/router";
import Link from "next/link.js";
import PlayAnimationOnHover from "@/utils/animation";
import Arrowleft from "../../public/lotties/Arrowleft.json";

const style = {
  height: 40,
  width: 40,
};

const options = {
  animationData: Arrowleft,
  loop: true,
  autoplay: false,
};
export default function BackButton() {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <>
      <Link href="#" onClick={handleClick}>
        <PlayAnimationOnHover style={style} options={options} />
      </Link>
    </>
  );
}
