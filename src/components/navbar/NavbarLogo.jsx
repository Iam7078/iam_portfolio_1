const NavbarLogo = () => {
  return (
    <div>
      <img
        src="/images/logo_text.png"
        alt="Logo Desktop"
        className="hidden md:block h-8 md:h-12 lg:h-16 w-auto transition-all duration-500 hover:scale-110 cursor-pointer"
      />
      <img
        src="/images/logo.png"
        alt="Logo Mobile"
        className="block md:hidden h-8 sm:h-12 w-auto transition-all duration-500 hover:scale-110 cursor-pointer"
      />
    </div>
  )
}

export default NavbarLogo;

