import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
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
            to="/"
            className="text-gray-700 hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/packs"
            className="text-gray-700 hover:text-black"
          >
            Packs
          </Link>
        </div>
      </div>
    </nav>
  );
}