import CMS, { init } from 'netlify-cms-app';
import { pt } from 'netlify-cms-locales';
import articlesCollections from './articles.collection';
import authorsCollections from './authors.collection';
import categoriesCollections from './categories.collection';
import donationsCollections from './donations.collection';
import indexPage from './index/index.page';
import odsCollections from './ods.collection';

const config = {
  backend: {
    name: 'git-gateway',
    branch: process.env.GATSBY_CMS_BRANCH,
    squash_merges: true,
  },
  publish_mode: 'editorial_workflow',
  media_folder: 'static/images/uploads',
  public_folder: '/images/uploads',
  site_url: 'https://gretas.org',
  display_url: 'https://gretas.org',
  locale: 'pt',
  collections: [
    {
      name: 'pages',
      label: 'Páginas',
      files: [indexPage],
    },
    donationsCollections,
    odsCollections,
    articlesCollections,
    categoriesCollections,
    authorsCollections,
  ],
};

if (process.env.NODE_ENV === 'development') {
  config['local_backend'] = true;
}

init({ config });
CMS.registerLocale('pt', pt);
