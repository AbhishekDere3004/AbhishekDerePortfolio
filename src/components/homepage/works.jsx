import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://www.hypermatica.com/fablogo.png"
								alt="hypermatica"
								className="work-image"
							/>
							<div className="work-title">Hypermatica</div>
							<div className="work-subtitle">
								Cloud Analyst
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://www.agroson.net/_next/image?url=%2Fassets%2Flogo.png&w=3840&q=75"
								alt="agroson"
								className="work-image"
							/>
							<div className="work-title">Agroson</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
