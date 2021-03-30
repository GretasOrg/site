import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function MiniArticle({
  title,
  author,
  date,
  image,
  imageAlt,
  url,
  tags,
  size,
}) {
  return (
    <a
      className={
        size === 'small' ? 'c-miniBlog__item-small' : 'c-miniBlog__item-big'
      }
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <article
        className={
          size === 'small'
            ? 'c-miniArticle c-miniArticle-small'
            : 'c-miniArticle c-miniArticle-big'
        }
      >
        <GatsbyImage
          className="c-miniArticle__picture"
          image={image}
          alt={imageAlt}
          loading="lazy"
          objectFit="cover"
          style={size === 'small' ? {} : { position: 'absolute' }}
        />
        <div className="c-miniArticle__info">
          <span className="c-miniArticle__categories">{tags.join(' ')} |</span>
          <span className="c-miniArticle__date">{date}</span>
        </div>
        <h3 className="c-miniArticle__title">{title}</h3>
        <span className="c-miniArticle__author">
          Por <span className="c-miniArticle__authorName">{author}</span>
        </span>
      </article>
    </a>
  );
}

export function MiniArticleSmall(props) {
  return <MiniArticle size="small" {...props} />;
}

export function MiniArticleBig(props) {
  return <MiniArticle size="big" {...props} />;
}
