import React, {useEffect, useState} from 'react';
import Heading from './Heading/Heading';
import Link from './Link/Link';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link as ReactLink, useNavigate} from 'react-router-dom';
import auth from '..';
import Button from "./Button/Button";
import {signOut} from 'firebase/auth';
import "./vincent.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {

	const[user, setUser] = useState(null);

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
		  if (user) {
			setUser(user);
		  }
		});
	
		// Cleanup subscription on unmount
		return () => {
		  unsubscribe();
		};
	  }, []);

	const logOut = async () => {
		try {
			await signOut(auth)
		} catch {
			alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
		}
	}

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
						{/*<li className="nav-item">
							<ReactLink to={'/random'}>
								<Link className={"nav-link"} text='RandomGenerator'></Link>
							</ReactLink>
						</li>
						<li className="nav-item">
							<ReactLink to={'/faq'}>
								<Link className={"nav-link"} text='FAQ'></Link>
							</ReactLink>
						</li>*/}
						<li className="nav-item">

						</li>
					</ul>
				</div>

			</div>
			<div class="log">
				{
					user ?
						<>
						<div class="info1">
							<p class="info-user">{user.displayName}</p>
						</div>
							<div class="info2">
							<Button text="Logout" onClick={logOut} link={'/'}/>
							</div>
						</>
						:
						<ReactLink to={'/login'}>
							<Link className={"nav-link"} text='Login'></Link>
						</ReactLink>
				}
			</div>
		</nav>
	);
};

export default Navbar;