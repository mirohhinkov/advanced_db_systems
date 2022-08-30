const React = require('react');
const PostSmallComponent = require('./PostSmallComponent');

const PostsList = require('../../Lists/ComponentsList');

const AllPosts = ({ posts, showMe }) => {
  if (typeof showMe === 'undefined') {
    showMe = true;
  }
  return (
    <section id="latest-posts">
      {showMe && <h2>My latest posts</h2>}
      <ul>
        <PostsList
          items={posts}
          resourceName="post"
          itemComponent={PostSmallComponent}
        />
      </ul>
    </section>
  );
};

module.exports = AllPosts;
