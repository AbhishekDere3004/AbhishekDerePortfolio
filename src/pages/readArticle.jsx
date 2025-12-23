import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myCertificates from "../data/certificates";

import "./styles/readArticle.css";

let CertificateStyle = styled.div``;

const ReadCertificate = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const certificate = myCertificates[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [certificate]);

	CertificateStyle = styled.div`
		${certificate().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${certificate().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={certificate().description} />
				<meta name="keywords" content={certificate().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
						<div className="read-article-date-container">
							<div className="read-article-date">
								{certificate().date}
							</div>
						</div>

						<div className="title read-article-title">
							{certificate().title}
						</div>

						<div className="read-article-body">
							<CertificateStyle>{certificate().body}</CertificateStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadCertificate;
