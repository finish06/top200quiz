import logo from '../assets/medication.png';

const Header = () => (
	<header className="row">
		<div className=" col col-sm-4">
			<img src={logo} className="logo float-sm-end mt-3" alt="logo" />
		</div>
		<span className="col-md-7 display-6 subtitle my-auto">Test your knowledge of the top 200 medications</span>
	</header>
);

export default Header;
