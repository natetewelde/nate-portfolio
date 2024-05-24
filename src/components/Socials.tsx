import Link from "next/link";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

const socials = [
	{ icon: <FaLinkedin />, path: "https://www.linkedin.com/in/nathanieltewelde/" },
	{ icon: <FaGithub />, path: "https://github.com/natetewelde" },
	{ icon: <FaGitlab />, path: "https://gitlab.com/ntewelde" },
];

interface SocialsProps {
	containerStyles: string;
	iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => (
				<Link target="_blank" key={index} href={item.path} className={iconStyles}>
					{item.icon}
				</Link>
			))}
		</div>
	);
};

export default Socials;
