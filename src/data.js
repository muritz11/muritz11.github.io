import Lo3re from './assets/images/lo3re.png'
import Sincerely from './assets/images/sincerely.png'
import Flow from './assets/images/flow.jpg'
import GCW from './assets/images/gcw.jpg'
import Canbel from './assets/images/canbel_logo.jpg'
import ChatEsm from './assets/images/chat-esm.png'
import Flash from './assets/images/screencapture-flashdashboard-netlify-app-dashboard-2022-06-14-20_01_17.png'

export const Projects = [
  {
    name: 'GCW store',
    category: 'E-commerce',
    desc: 'Explore a collection of crochet wearables. Browse handmade treasures for everyday elegance.',
    tools: ['PHP', 'Laravel', 'MySQL'],
    coverImg: GCW,
    link: 'https://gcwstores.shop/',
  },
  {
    name: 'ChatESM',
    category: 'AI Chatbot',
    desc: 'Your trusted resource for expert guidance, and insightful content on ITSM practices. Our AI chat platform provides expert guidance on ITSM practices. We offer resources, visual aids, and custom content generation to help you achieve your IT and business objectives.',
    tools: ['javascript', 'react', 'redux toolkit', 'typescript'],
    coverImg: ChatEsm,
    link: 'https://chat-esm.vercel.app/',
  },
  {
    name: 'Sincerely Yours',
    category: 'Gift Registry',
    desc: 'Contributed, designed and implemented visual elements for the Homepage, translating UI/UX design to actual code.',
    tools: ['laravel', 'blade template', 'css'],
    coverImg: Sincerely,
    link: 'https://sincerelyyours.com.ng/',
  },
  {
    name: 'FlowRhythm',
    category: 'Music + Tech',
    desc: 'Request music from actively playing DJs anywhere you are, at a club or a party any day anytime. You can also request songs from DJs playing on a radio station.',
    tools: ['javascript', 'react', 'redux', 'typescript'],
    coverImg: Flow,
    link: 'https://www.flowrhythm.studio/',
  },
  {
    name: 'Canbel Technologies',
    category: 'Data Acquisition Assessment and Management System',
    desc: 'Contributed and maintained code for seamless card payment using Paystack payment gateway API',
    tools: ['php', 'mysql'],
    coverImg: Canbel,
    link: 'https://www.canbeltech.com/',
  },
  {
    name: 'Flash Dashboard',
    category: 'Logistics Dashboard',
    desc: 'A Logistics Admin dashboard for tracking and managing orders, riders and users',
    tools: ['javascript', 'react', 'redux', 'bootstrap'],
    coverImg: Flash,
    link: 'https://flashdashboard.netlify.app/signin',
  },
]
