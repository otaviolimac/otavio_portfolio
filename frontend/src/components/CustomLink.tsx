import { MdKeyboardArrowRight } from "react-icons/md";
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  text: string;
  to: string;
}

function CustomLink({ text, to }: LinkProps) {
  return (
    <RouterLink to={to}>
      {text} <MdKeyboardArrowRight />
    </RouterLink>
  );
}

export default CustomLink;