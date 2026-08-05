import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="border-b bg-black text-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="64" height="64">
            <g transform="translate(45, 42) rotate(45) skewX(-20) scale(1, 0.6)">
              <rect x="0" y="0" width="55" height="48" rx="3" fill="#EAB308"/>
            </g>
            <g transform="translate(45, 25) rotate(45) skewX(-20) scale(1, 0.6)">
              <rect x="0" y="0" width="55" height="48" rx="3" fill="#F97316"/>
            </g>
            <g transform="translate(45, 8) rotate(45) skewX(-20) scale(1, 0.6)">
              <rect x="0" y="0" width="55" height="48" rx="3" fill="#2563EB"/>
              <rect x="3" y="3" width="39" height="34" rx="2" fill="rgba(255,255,255,0.18)"/>
            </g> 
          </svg>
          MockAdPack
        </Link>

        <div className="flex gap-6">
          <Link
            to="https://github.com/suncodesapps/mockadpack"
            className="text-gray-100 hover:text-white"
          >
            Github
          </Link>

          <Link
            to="https://github.com/suncodesapps/mockadpack/issues"
            className="text-gray-100 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
