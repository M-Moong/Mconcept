import {NavLink} from 'react-router-dom';

function NavList({link = '#', listTitle, navListAddStyle = []}) {
	const className = `${navListAddStyle.join(' ')} relative block px-[13px] text-[14px] uppercase leading-[48px] text-[#000]`;

	return (
		<li className=" m-[0] p-[0]">
			<NavLink to={link} className={className}>
				{listTitle}
			</NavLink>
		</li>
	);
}
export default NavList;
