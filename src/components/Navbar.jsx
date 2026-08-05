import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="border-b bg-black text-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <FontAwesomeIcon icon={faBoxOpen} />
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