import Link from "next/link";

const pages = [
  { title: "Home", route: "/" },
  { title: "Parallax", route: "/parallax" },
  { title: "Contact", route: "/contact" },
  { title: "About", route: "/about" },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 mt-4 bg-transparent">
      <div className="w-[6%] flex items-center justify-center">
        <Link href="/" className="text-sm font-bold">
          Aryan
        </Link>
      </div>
      <div className="flex items-center justify-evenly w-[30%]">
        {pages.map((page) => (
          <Link
            href={page.route}
            key={page.title}
            className="text-sm font-bold"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
