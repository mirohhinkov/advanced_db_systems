const React = require('react');

const ComponentsList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => (
  <>
    {items.map((item) => (
      <ItemComponent key={item._id} {...{ [resourceName]: item }} />
    ))}
  </>
);

module.exports = ComponentsList;
