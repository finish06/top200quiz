import logo from '../assets/medication.png';

const Header = () => (
	<header className="row justify-content-center">
		<div className="col-3 my-4">
			<img src={logo} className="float-end logo" alt="logo" />
		</div>
		<div className="col-8 d-flex align-items-center">
			<span className="display-5 subtitle">Test your knowledge of the top 200 medications</span>
		</div>
	</header>
);

export default Header;
