import Card from './card'

const Gallery = ({ animes }) => {
	return (
		<ul className="py-8 grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
			{animes.map((item, index) => {
				return <Card item={item} key={index} />;
			})}
		</ul>
	);
};

export default Gallery;
