import logo from "../assets/medication.png";

const Header = () => (
    <header className="row">
        <div className="col-md-4">
            <img src={logo} className="logo float-sm-left float-md-end" alt="logo" />
        </div>
        <p className="col-md-7 mt-5 subtitle">
            Test your knowledge of the top 200 medications
        </p>
    </header>
);

export default Header;