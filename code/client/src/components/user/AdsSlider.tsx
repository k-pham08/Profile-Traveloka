import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ADVERTISEMENTS } from "../../utils/constraint";

export const AdsSlider = () => {
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
				{ADVERTISEMENTS.map((path) => (
					<AdvertisementItem src={path} />
				))}
			</Slider>
		</div>
	);
};

function AdvertisementItem({ src }: any) {
	return (
		<div style={{ width: "5rem", height: "4rem" }}>
			<img src={src} alt="Ads" />
		</div>
	);
}
