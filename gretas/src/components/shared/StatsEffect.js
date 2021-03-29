import React from "react"
import SVG from "../../images/effects/stats-effect.inline.svg"

export default function StatsEffect({
  className,
  svgClassName,
  children,
  count,
}) {
  return (
    <article className={"c-stats " + className ? className : ""}>
      <span className="c-stats__number">
        <SVG className={"c-stats__bg " + svgClassName} />
        <span className="c-stats__numberText">{count}</span>
      </span>
      <span className="c-stats__text">{children}</span>
    </article>
  )
}
