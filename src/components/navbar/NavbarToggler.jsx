import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className="text-2xl p-3 border-[2px] border-hover rounded-full"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
