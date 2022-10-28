import React from 'react';
import Heading from './Heading/Heading';
import Link from './Link/Link';
import Switch from './Switch/Switch';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as ReactLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<div className="navbar-nav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Heading className={"navbar-brand mb-0 h1"} text='Animetti' size={"title-bg"}></Heading>
						</li>
						<li className="nav-item">
							<ReactLink to={'/'}>
								<Link className={"nav-link"} text='Home'></Link>
							</ReactLink>
						</li>
						<li className="nav-item">
							<ReactLink to={'/ranking'}>
								<Link className={"nav-link"} text='Ranking'></Link>
							</ReactLink>
						</li>
						<li className="nav-item">
							<ReactLink to={'/random'}>
								<Link className={"nav-link"} text='RandomGenerator'></Link>
							</ReactLink>
						</li>
						<li className="nav-item">
							<ReactLink to={'/faq'}>
								<Link className={"nav-link"} text='FAQ'></Link>
							</ReactLink>
						</li>
					</ul>
				</div>

			</div>
		</nav>
	);
};

export default Navbar;