import React from "react";

export default function Topic(props) {
  const { style } = props;

  return (
    <div className="topic-container">
      <ul className="topic-list">
        <li className="topic-li">All</li>
        <li className="topic-li">Salman Khan</li>
        <li className="topic-li">Scene</li>
        <li className="topic-li">Music</li>
        <li className="topic-li">Live</li>
        <li className="topic-li">Indian soap operas</li>
        <li className="topic-li">Bhavya Gandhi</li>
        <li className="topic-li">Kumar sanu</li>
        <li className="topic-li">Satsang</li>
        <li className="topic-li">Bollywood</li>
      </ul>
    </div>
  );
}
