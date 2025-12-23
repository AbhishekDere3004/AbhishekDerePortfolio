import React from "react";

function certificate_1() {
	return {
		date: "6 December 2025",
		title: "Salesforce Certified Agentforce Specialist",
		description:
			"Professional certification demonstrating expertise in Salesforce Agentforce platform, showcasing advanced skills in agent automation and intelligent customer service solutions.",
		keywords: [
			"Salesforce Certified Agentforce Specialist",
			"Salesforce Agentforce",
			"Agent Automation",
			"Customer Service Solutions",
			"Abhishek Dere",
		],
		style: `
				.certificate-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.certImage {
					align-self: center;
					outline: 2px solid #007acc;
					max-width: 100%;
					height: auto;
					width: 600px;
					margin: 20px 0;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				}

				@media (max-width: 768px) {
					.certImage {
						width: 100%;
						max-width: 400px;
					}
				}
				`,
		body: (
			<React.Fragment>
				<div className="certificate-content">
					<div className="paragraph">Salesforce Certified Agentforce Specialist certification demonstrates expertise in implementing and managing intelligent agent solutions on the Salesforce platform. This certification validates skills in agent automation, customer service optimization, and AI-powered interactions.</div>
					<img
						src="/Cert7134836_AgentforceSpecialist_20251205 (1)_page-0001.jpg"
						alt="Salesforce Agentforce Specialist Certificate"
						className="certImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function certificate_2() {
	return {
		date: "26 October 2024",
		title: "Salesforce Certified AI Associate",
		description:
			"Certification demonstrating foundational knowledge of AI concepts and their application within the Salesforce ecosystem, including Einstein AI capabilities and implementation.",
		style: `
				.certificate-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.certImage {
					align-self: center;
					max-width: 100%;
					height: auto;
					width: 600px;
					margin: 20px 0;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					outline: 2px solid #007acc;
				}

				@media (max-width: 768px) {
					.certImage {
						width: 100%;
						max-width: 400px;
					}
				}
				`,
		keywords: [
			"Salesforce Certified AI Associate",
			"Salesforce AI",
			"Einstein AI",
			"Artificial Intelligence",
			"Abhishek Dere",
		],
		body: (
			<React.Fragment>
				<div className="certificate-content">
					<h1>Salesforce Certified AI Associate</h1>
					<p>Demonstrates foundational knowledge of AI concepts, Einstein AI platform capabilities, and implementation of AI solutions within Salesforce environments.</p>
					<img
						src="/Cert5133010_AIAssociate_20241026_page-0001.jpg"
						alt="Salesforce AI Associate Certificate"
						className="certImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myCertificates = [certificate_1, certificate_2];

export default myCertificates;