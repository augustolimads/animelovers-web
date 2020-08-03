import Link from "next/link";

export default function Header() {
	return (
		<header className="py-6 flex items-center justify-center">
			<Link href="/">
				<img src="logo.png" alt="logo" className="w-4/6 max-w-xs" />
			</Link>
		</header>
	);
}
