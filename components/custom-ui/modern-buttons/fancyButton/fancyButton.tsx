import { ExternalLink } from "lucide-react";
import "./fancyButton.css";

const FancyButton = ({ label }: { label: string }) => {
  return <button className="button">{label}</button>;
};

export default FancyButton;
