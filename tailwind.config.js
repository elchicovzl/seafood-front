/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./app/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			backgroundImage: {
				'my_bg_image' : "url('/images/bg.png')",
			  }
		}, 
	}, 
	plugins: [], 
}