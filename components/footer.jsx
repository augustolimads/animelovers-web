import {useEffect, useState} from 'react'

export default function Footer() {
	const [position, setPosition] = useState(null)

	function posFunc(){
		const myFooter = document.querySelector('#footer')
		setPosition(myFooter.getBoundingClientRect().top)
		console.log('footer pos: ' + position)
	}

	return (
		<footer className="flex items-center justify-center text-white flex-wrap p-4" id='footer' onChange={posFunc}>
			<span>Made with s2 by <a href='https://github.com/augustolimads' target='_blank'>Augusto</a></span>
		</footer>
	);
}
