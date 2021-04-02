import aboutUsSection from './about-us.section';
import donationsSection from './donations.section';
import featuresSection from './features.section';
import introSection from './intro.section';
import joinUsSection from './join-us.section';

const indexPage = {
  name: 'index',
  label: 'Index Page',
  file: 'content/site/index.md',
  fields: [
    introSection,
    aboutUsSection,
    donationsSection,
    featuresSection,
    joinUsSection,
  ],
};

export default indexPage;
