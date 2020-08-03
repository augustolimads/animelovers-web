const Card = ({ item, index }) => {
	return (
		<a href={item.url} target="_blank">
			<li
				key={index}
				className="bg-dark rounded-lg h-64 relative overflow-hidden shadow-lg"
				style={{
					backgroundImage: `url(${item.image_url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<span className="bg-primary p-1 rounded-lg absolute top-0 right-0 m-4 font-semibold text-secondary">
					{item.score}
				</span>
				<div className="bg-white w-full text-center absolute bottom-0 p-4">
					<h3 className="text-xl font-bold text-primary">
						{item.title}
					</h3>
					<p>
						{item.type} - {item.episodes}
						<span>
							{item.episodes > 1 ? " episodes" : " episode"}
						</span>
					</p>
				</div>
			</li>
		</a>
	);
};

export default Card;
