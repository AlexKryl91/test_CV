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
      { svg: Figma, ref: 'https://www.figma.com/' },
      {
        svg: Photoshop,
        ref: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      { svg: Illustrator, ref: 'https://www.adobe.com/' },
      { svg: Premiere, ref: 'https://www.adobe.com/' },
      { svg: Notion, ref: 'https://www.notion.so/' },
      { svg: GoogleMeet, ref: 'https://meet.google.com/landing' },
    ],
  },
  {
    caption: 'no-code',
    icons: [
      { svg: Zapier, ref: 'https://zapier.com/' },
      { svg: Webflow, ref: 'https://webflow.com/' },
      { svg: Framer, ref: 'https://www.framer.com/' },
      { svg: WordPress, ref: 'https://wordpress.com/' },
    ],
  },
  {
    caption: 'artificial intelligence',
    icons: [
      { svg: ChatGPT, ref: 'https://chatgpt.com/' },
      { svg: Copilot, ref: 'https://copilot.microsoft.com/' },
      { svg: Midjourney, ref: 'https://www.midjourney.com/home' },
    ],
  },
];

export default IconGroups;
