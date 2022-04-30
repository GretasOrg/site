import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Converter } from "showdown";
import FluidSquareSVG from "../../images/effects/fluid-square-effect.inline.svg";
import HighlightedText from "../shared/HighlightedText";
import PaperEffect from "../shared/PaperEffect";
import StatsEffect from "../shared/StatsEffect";
import Video from "../shared/Video";

const converter = new Converter();

export default function AboutUs({ data }) {
  const {
    aboutLink,
    aboutLinkText,
    aboutText,
    bannerImg,
    bannerText,
    stats,
    title,
    video,
  } = data;
  const bannerImgObj = getImage(bannerImg.childImageSharp.gatsbyImageData);
  return (
    <section className="c-about">
      <div className="l-about__col1">
        <HighlightedText className="c-about__title" color="faded-dark">
          {title}
        </HighlightedText>
        <div
          className="c-about__text"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(aboutText),
          }}
        ></div>
        <a
          className="c-about__joinUs"
          href={aboutLink}
          target="_blank"
          rel="noreferrer"
        >
          {aboutLinkText}
        </a>
      </div>
      <div className="l-about__col2">
        <ul className="l-about__stats">
          {stats.map((stat, index) => (
            <li key={index}>
              <StatsEffect
                count={stat.count}
                color={stat.color}
                textHtml={converter.makeHtml(stat.text)}
              ></StatsEffect>
            </li>
          ))}
        </ul>
      </div>
      <div className="l-about__col3">
        {/* <div className="c-about__banner">
          <FluidSquareSVG className="c-about__bannerBg" />
          <GatsbyImage
            className="c-about__volunteer"
            image={bannerImgObj}
            alt="Voluntária Gretas"
            loading="lazy"
            style={{ position: "absolute" }}
          />
          <span
            className="c-about__helpText"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(bannerText),
            }}
          ></span>
        </div> */}
        <Video
          className="c-about__video"
          videoSrcURL={video}
          videoTitle="TODO - Ação Ibimirim GRETAS 2021 - Primeiro final de semana"
        />
      </div>
      <PaperEffect className="c-about__bottom" />
    </section>
  );
}
