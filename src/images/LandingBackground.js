import React from "react";

const gridStyles = {
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: "-1",
	filter: "drop-shadow(0px 0px 8px var(--pink))"
}

const LandingBackground = ({stroke})=>(
	<svg className="svg-grid" style={gridStyles}>
		<line className="v"     x1="0%" y1="51%" x2="100%" y2="51%" stroke={stroke}/>
		<line className="v v-1" x1="0%" y1="51%" x2="100%" y2="51%" stroke={stroke}/>
		<line className="v v-2" x1="0%" y1="55%" x2="100%" y2="55%" stroke={stroke}/>
		<line className="v v-3" x1="0%" y1="60%" x2="100%" y2="60%" stroke={stroke}/>
		<line className="v v-4" x1="0%" y1="66%" x2="100%" y2="66%" stroke={stroke}/>
		<line className="v v-5" x1="0%" y1="73%" x2="100%" y2="73%" stroke={stroke}/>
		<line className="v v-6" x1="0%" y1="81%" x2="100%" y2="81%" stroke={stroke}/>
		<line className="v v-7" x1="0%" y1="90%" x2="100%" y2="90%" stroke={stroke}/>
		<line className="v v-8" x1="0%" y1="100%" x2="100%" y2="100%" stroke={stroke}/>
		
		<line x1="-120%" y1="100%" x2="07%" y2="51%" stroke={stroke}/>
		<line x1="-100%" y1="100%" x2="12%" y2="51%" stroke={stroke}/>
		<line x1="-80%"  y1="100%" x2="17%" y2="51%" stroke={stroke}/>
		<line x1="-60%"  y1="100%" x2="22%" y2="51%" stroke={stroke}/>
		<line x1="-40%"  y1="100%" x2="27%" y2="51%" stroke={stroke}/>
		<line x1="-20%"  y1="100%" x2="32%" y2="51%" stroke={stroke}/>
		<line x1="00%"   y1="100%" x2="37%" y2="51%" stroke={stroke}/>
		<line x1="20%"   y1="100%" x2="42%" y2="51%" stroke={stroke}/>
		<line x1="40%"   y1="100%" x2="47%" y2="51%" stroke={stroke}/>
		
		<line x1="60%"  y1="100%" x2="52%" y2="51%" stroke={stroke}/>
		<line x1="80%"  y1="100%" x2="57%" y2="51%" stroke={stroke}/>
		<line x1="100%" y1="100%" x2="62%" y2="51%" stroke={stroke}/>
		<line x1="120%" y1="100%" x2="67%" y2="51%" stroke={stroke}/>
		<line x1="140%" y1="100%" x2="72%" y2="51%" stroke={stroke}/>
		<line x1="160%" y1="100%" x2="77%" y2="51%" stroke={stroke}/>
		<line x1="180%" y1="100%" x2="82%" y2="51%" stroke={stroke}/>
		<line x1="200%" y1="100%" x2="87%" y2="51%" stroke={stroke}/>
		<line x1="220%" y1="100%" x2="92%" y2="51%" stroke={stroke}/>
	</svg>
);

export default LandingBackground;
