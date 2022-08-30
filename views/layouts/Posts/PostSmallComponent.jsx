const React = require("react");

const PostSmallComponent = ({ post }) => (
    <li>
        <article className="post">
            <a href={`/posts/${post._id}`}>
                <img src={post.imgUrl} alt={post.imgAlt} />
                <div className="post__content">
                    <h3>{post.title}</h3>
                    <p>{post.short}</p>
                </div>
            </a>
        </article>
    </li>
);

module.exports = PostSmallComponent;