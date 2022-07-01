
import "../styles/floatingAbout.css";
import { Link } from "react-router-dom";

function FloatingAboutUs() {
  // useState();

  return (
    <div id="floatingAboutUs">
      <Link
        className="text-decoration-none link px-4 py-1 shadow-lg"
        to="/sobre-este-proyecto"
      >
        <span>Sobre este proyecto</span>
      </Link>
    </div>
  );
}

export default FloatingAboutUs;
