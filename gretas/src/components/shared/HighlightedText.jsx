import React from "react"
import HighlightedTextSVG from "./HighlightedTextSVG"

export default function HighlightedText({ children, color }) {
  let colorClass
  if (color === "warning") {
    colorClass = "c-highlightedText__bg-warning"
  } else if (color === "faded") {
    colorClass = "c-highlightedText__bg-faded"
  } else if (color === "faded-dark") {
    colorClass = "c-highlightedText__bg-faded-dark"
  } else if (color === "faded-darker") {
    colorClass = "c-highlightedText__bg-faded-darker"
  }
  return (
    <article className="c-highlightedText">
      <h1 className="c-highlightedText__text">{children}</h1>
      <HighlightedTextSVG
        className={"c-highlightedText__bg " + colorClass}
      ></HighlightedTextSVG>
    </article>
  )
}
