export default function Footer() {
  return (
    <footer className="border-t bg-black text-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} MockAdPack · MIT License ·{" "}
          <a
            href="https://github.com/suncodesapps/mockadpack"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://github.com/suncodesapps/mockadpack/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
}
