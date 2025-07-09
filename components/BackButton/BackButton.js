import { BackLink } from "./BackButton.style.js";
import { useRouter } from "next/router";
import Arrowleft from "../../public/lotties/ShoppingIcon.json";

export default function BackButton() {
const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.back();
  };
    return (<>
    <BackLink href="#" onClick={handleClick}>

Back 
    </BackLink>
    </>)
}