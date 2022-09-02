const React = require('react');

const MakeParagraphs = ({ text }) => {
    return text.split('\n').map(row => (<p>{row}</p>))
}

module.exports = MakeParagraphs;