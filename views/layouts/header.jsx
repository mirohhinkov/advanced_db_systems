const React = require('react');
const Modal = require('./Modal/Modal');
const OwnerLogin = require('./Login/OwnerLogin');

const UserImageMenu = ({ logged, usr }) => (
  <span className="dropdown">
    {logged && usr.photo == '' && (
      <div id="usr-name">
        <p>{usr.userName.charAt(0).toUpperCase()}</p>
      </div>
    )}
    {logged && usr.photo != '' && (
      <img id="usr-name" src={usr.photo} alt={`${usr.userName} photo`} />
    )}
    <div className="dropdown-content">
      <a href="/updateEmail">Update email</a>
      <a href="/updatePassword">Update Password</a>
      {/* <a href="#">Upload photo</a> */}
    </div>
  </span>
);

const Msg = () => (
  <div id="msg" className="hide">
    <p id="msg-content"></p>
  </div>
);

const Header = ({ showMe, logged, usr }) => {
  return (
    <>
      <header id="main-navigation">
        {showMe && (
          <img
            id="my-img"
            src="/img/miro.jpg"
            alt="Miroslav the author of this blog"
          />
        )}
        <h1>
          <a href="/">Miroslav's Blog</a>
        </h1>
        <nav>
          <a href="/posts">All Posts</a>
          <a href="/contact">Contact</a>
          <a href="/login">{logged ? 'Logout' : 'Login'}</a>
          <span id="dashboard">My Dashboard</span>
          <UserImageMenu logged={logged} usr={usr} />
          <Modal>
            <OwnerLogin />
          </Modal>
          <Msg />
        </nav>
      </header>
      <section id="welcome">
        <p></p>
      </section>
    </>
  );
};

module.exports = Header;
