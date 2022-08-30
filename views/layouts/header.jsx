const React = require('react');

const Header = ({ showMe, logged }) => (
  <>
    <header id="main-navigation">
      {showMe && (
        <img src="/img/miro.jpg" alt="Miroslav the author of this blog" />
      )}
      <h1>
        <a href="/">Miroslav's Blog</a>
      </h1>
      <nav>
        <a href="/posts">All Posts</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/login">{logged ? 'Logout' : 'Login'}</a>
        <a href="/dashboard">My Dashboard</a>
      </nav>
    </header>
    <section id="welcome">
      <p></p>
    </section>
  </>
);

module.exports = Header;
