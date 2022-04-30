import React from "react";
import SVG from "../../images/effects/stats-effect.inline.svg";

export default function StatsEffect({ className, color, textHtml, count }) {
  return (
    <article className={"c-stats " + className ? className : ""}>
      <span className="c-stats__number">
        <SVG
          className="c-stats__bg"
          style={{
            fill: `var(${color})`,
          }}
        />
        <span className="c-stats__numberText">{count}</span>
      </span>
      <div
        className="c-stats__text"
        dangerouslySetInnerHTML={{ __html: textHtml }}
      ></div>
    </article>
  );
}
