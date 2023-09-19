function NavList({listTitle, navListAddStyle = []}) {
	const className = `${navListAddStyle.join(' ')} relative block px-[13px] text-[14px] uppercase leading-[48px] text-[#000]`;

	return (
		<li className=" m-[0] p-[0]">
			<a className={className} href="/">
				{listTitle}
			</a>
		</li>
	);
}
export default NavList;
