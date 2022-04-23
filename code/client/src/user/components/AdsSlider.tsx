import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AdsSlider extends Component {
	render() {
		const items = [
			"https://ik.imagekit.io/tvlk/image/imageResource/2022/04/05/1649154913787-703cafe0bf9fed04d9937ba931cf5866.jpeg?tr=h-230,q-75,w-472",
			"https://ik.imagekit.io/tvlk/image/imageResource/2022/04/20/1650452762625-64e60040df800d64883810d8418bf55f.png?tr=h-230,q-75,w-472",
			"https://ik.imagekit.io/tvlk/image/imageResource/2022/04/20/1650419216415-bbacd77365861c070e21903a924646c2.jpeg?tr=h-230,q-75,w-472",
			"https://ik.imagekit.io/tvlk/image/imageResource/2022/04/20/1650452397612-fa7bad123bb9e7b59477e09af81eaee6.png?tr=h-230,q-75,w-472",
			"https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=h-230,q-75,w-472",
			"https://ik.imagekit.io/tvlk/image/imageResource/2022/04/07/1649315686206-427fdc6225748d594d5b914dfa7d0cad.jpeg?tr=h-230,q-75,w-472",
		];
		return (
			<div
				style={{
					background: "rgba(73,179,232,1.00)",
					padding: "2rem",
					marginBottom: "1rem",
				}}
			>
				<Slider
					className="center"
					centerMode={true}
					centerPadding="0"
					slidesToShow={3}
					speed={500}
				>
					{items.map((item) => (
						<div style={{ width: "5rem", height: "4rem" }}>
							<img src={item} alt="Ads" />
						</div>
					))}
				</Slider>
			</div>
		);
	}
}
