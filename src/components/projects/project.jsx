import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, technologies, category, image } = props;

	return (
		<React.Fragment>
			<div className="project">
				<a href={link} target="_blank" rel="noreferrer">
					<div className="project-container">
						<div className="project-header">
							<div className="project-logo">
								<img src={logo} alt="logo" />
							</div>
							{category && <div className="project-category">{category}</div>}
						</div>
						<div className="project-title">{title}</div>
						{image && (
							<div className="project-image">
								<img src={image} alt={`${title} screenshot`} />
							</div>
						)}
						<div className="project-description">{description}</div>
						{technologies && (
							<div className="project-technologies">
								{technologies.map((tech, index) => (
									<span key={index} className="tech-tag">{tech}</span>
								))}
							</div>
						)}
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Project;
