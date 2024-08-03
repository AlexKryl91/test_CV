import Figma from '/img/figma.svg';
import Photoshop from '/img/photoshop.svg';
import Illustrator from '/img/illustrator.svg';
import Premiere from '/img/premiere.svg';
import Notion from '/img/notion.svg';
import GoogleMeet from '/img/google_meet.svg';

import Zapier from '/img/zapier.svg';
import Webflow from '/img/webflow.svg';
import Framer from '/img/framer.svg';
import WordPress from '/img/wordpress.svg';

import ChatGPT from '/img/chat_gpt.svg';
import Copilot from '/img/copilot.svg';
import Midjourney from '/img/midjourney.svg';

const IconGroups = [
  {
    caption: 'design',
    icons: [
      { path: Figma, ref: 'https://www.figma.com/' },
      {
        path: Photoshop,
        ref: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      { path: Illustrator, ref: 'https://www.adobe.com/' },
      { path: Premiere, ref: 'https://www.adobe.com/' },
      { path: Notion, ref: 'https://www.notion.so/' },
      { path: GoogleMeet, ref: 'https://meet.google.com/landing' },
    ],
  },
  {
    caption: 'no-code',
    icons: [
      { path: Zapier, ref: 'https://zapier.com/' },
      { path: Webflow, ref: 'https://webflow.com/' },
      { path: Framer, ref: 'https://www.framer.com/' },
      { path: WordPress, ref: 'https://wordpress.com/' },
    ],
  },
  {
    caption: 'artificial intelligence',
    icons: [
      { path: ChatGPT, ref: 'https://chatgpt.com/' },
      { path: Copilot, ref: 'https://copilot.microsoft.com/' },
      { path: Midjourney, ref: 'https://www.midjourney.com/home' },
    ],
  },
];

export default IconGroups;
