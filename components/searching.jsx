const Searching = () => {
	return (
		<ul className="py-8 grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 animate-pulse">
			{Array.from({ length: 10 }, (x, i) => {
				return <Card />;
			})}
		</ul>
	);
};

const Card = () => {
	return (
		<li className="bg-gray rounded-lg h-64 relative overflow-hidden shadow-lg">
			<span className="bg-white text-white p-1 rounded-lg absolute top-0 right-0 m-4 font-semibold">
				score
			</span>
			<div className="bg-white w-full text-center absolute bottom-0 p-4">
				<h3 className="text-xl font-bold text-gray bg-gray">title</h3>
				<p className="text-gray bg-gray mt-1">type - episodes</p>
			</div>
		</li>
	);
};

export default Searching;
