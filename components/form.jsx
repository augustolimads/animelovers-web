import { FaFilter } from "react-icons/fa";

const Form = ({ search, searchRef }) => {
	return (
		<div className="flex items-center justify-between flex-wrap md:flex-no-wrap">
			<div className="w-full flex">
				{/**<button className="p-3 text-md mr-4">
					<i className="text-gray">
						<FaFilter />
					</i>
				</button>**/}
				<label htmlFor="search" title="search anime" />
				<input
					ref={searchRef}
					type="text"
					name="search"
					placeholder="type an anime title"
					className="w-full p-2 rounded-md"
				/>
			</div>
			<button
				onClick={search}
				className="bg-primary p-2 w-full rounded-lg text-white mt-3 md:mt-0 md:px-8 md:ml-4 md:w-1/3"
			>
				Pesquisar
			</button>
		</div>
	);
};

export default Form;
