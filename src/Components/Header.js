import { Link } from "react-router-dom";

const Header = ({
  submitHandler2,
  username,
  setUsername,
  password,
  setPassword,
  submitHandler3,
  search,
  setSearch,
  RadiantLogo,
}) => {
  return (
    <div className="header">
      <div className="left1">
        <img src={RadiantLogo}></img>
      </div>
      <div className="left3"></div>
      <div className="center1">
        <Link to="/">
          <h1 className="Name">General</h1>
        </Link>
      </div>
      <div className="right3"></div>
      <div className="right2">
        <form onSubmit={submitHandler3}>
          <input
            value={search}
            type="text"
            placeholder=""
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div className="right1"></div>
      <div className="generosity-0"></div>
      <div className="generosity-1"></div>
      <div className="generosity-2"></div>
      <div className="generosity-3">
        <form onSubmit={submitHandler2}>
          <div>
            <input
              value={username}
              type="text"
              placeholder="User Name"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              value={password}
              type="password"
              placeholder="pasword"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
