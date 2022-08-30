const React = require("react");

const PostsList = ({ items, resourceName, itemComponent: ItemComponent }) => (
    <>
        {items.map((item) => (
            <ItemComponent key={item._id} {...{ [resourceName]: item }} />
        ))}
    </>
)

module.exports = PostsList;