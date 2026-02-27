import { ExternalLink } from "lucide-react";
import "./fancyButton.css";

const FancyButton = ({
  label,
  setIsContactOpen,
}: {
  label: string;
  setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button className="button" onClick={() => setIsContactOpen(true)}>
      {label}
    </button>
  );
};

export default FancyButton;
