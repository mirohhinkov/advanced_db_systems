const React = require('react');

const Arrows = ({ page }) => (
    <section id="arrows">
        <a href={`/posts/${page}/down`}><span id="left_arrow" className="arrow">▶</span></a>
        &nbsp;&nbsp;&nbsp;
        <a href={`/posts/${page}/up`}><span className="arrow">▶</span></a>
    </section>
)

module.exports = Arrows;