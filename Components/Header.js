R

function Header() {
  return (
    <>
      <div className="select-none flex justify-between items-center px-5 bg-blue-900 text-white h-16">
        <Link href="/" className="font-bold text-2xl">
          className
        </Link>
        <ul className="flex gap-3">
          <Link
            href="/Page1"
            className="flex justify-center items-center text-md font-bold text-white py-2"
          >
            Page1
          </Link>
          <Link
            href="/Page2"
            className="flex justify-center items-center text-md font-bold text-white py-2"
          >
            Page2
          </Link>
          <Link
            href="/Page3"
            className="flex justify-center items-center text-md font-bold text-white py-2"
          >
            Page3
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
