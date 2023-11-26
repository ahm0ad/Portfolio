import "./NavbarMenu.css";
import { useRef } from 'react'
import { Link} from "react-router-dom";
import Logo from "../Images/code2go2.png";
import { FaBars, FaTimes } from "react-icons/fa";


const NavbarMenu = () => {

  const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
		<header>
			<img src={Logo} alt="logo" className="rounded-circle logo"/>
			<nav ref={navRef}>
				<Link href="/#">Home</Link>
				<Link href="/#">Projects</Link>
				<Link href="/#">Tools</Link>
        <Link href="/#">Portfolio</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavbarMenu;