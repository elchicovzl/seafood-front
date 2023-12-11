/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./app/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			backgroundImage: {
				'my_bg_image' : "url('/images/bg.png')",
				'my_bg_section' : "url('/images/patternbg.jpg')",
				'my_bg2_section' : "url('/images/fishbg.png')",
				'my_bg_banner' : "url('/images/banersushi.jpg')"
			  }
		}, 
	}, 
	plugins: [], 
}