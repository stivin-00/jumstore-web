import React from 'react';
import IconMen from '../Icons/IconMen';
import IconWomen from '../Icons/IconWomen';
import {IconDevices} from './images/fruits.png';
import IconGadget from '../Icons/IconGadget';
import IconGaming from '../Icons/IconGaming';
import {appColors} from './appColors';

export const features = [
  'Always up-to-date React Native scaffolding',
  'Modular and well-documented structure for application code',
  'Redux for state management',
  'React Navigation for simple navigation',
  'Dropdown Alert Helper for showing success/error/info message',
  'Basic custom components like Text input,Label and picker select etc',
];
export const starterIntro = [
  'We love building apps with React Native, because it helps us create high quality products for both major mobile platforms quickly and cost-effectively.',
  'Getting started on a new app just takes too long. Most apps need the same basic building blocks and developer infrastructure, and we are bored of reinventing the wheel time and time again.',
  'This Starter Kit reflects the best practices of React Native development we have discovered while building real-world applications for our customers. It is opinionated about tooling, patterns and development practices. It might not be a one-size-fits-all solution for everyone, but feel free to customize it for your needs, or just take inspiration from it.',
];
export const bestSellersList = [
  {
    name: 'BeoPlay Speaker',
    description: 'Bang and Olufsen',
    price: '$755',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'Wrist watch',
    description: 'Tag Heuer',
    price: '$499',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'Nike FIT Sleeve',
    description: 'Nike Dri-FIT longer.',
    price: '$1500',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'BeoPlay Speaker',
    description: 'Bang and Olufsen',
    price: '$755',
    image: require('../static/images/products/2.png'),
  },
];

export const productDetail = {
  name: 'Leather Wrist watch',
  detail:
    'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.',
  price: '$499',
  size: 'XL',
  color: 'blue',
  image: require('../static/images/products/2.png'),
  isFav: false,
};

export const reviews = [
  {
    name: 'Amusoftech',
    detail: 'Wonderful jean, perfect gift for my girl for our anniversary!',
    count: 4,
    image: require('../static/images/rate/1.png'),
  },
  {
    name: 'Aman Deep',
    detail: 'Nike Dri-FIT is a polyester fabric designed to help you ',
    count: 3,
    image: require('../static/images/rate/1.png'),
  },
];

export const categoriesList = [
  {
    label: 'fruits',
    image: require('./images/fruits.png'),
    Icon: () => <IconMen fill={appColors.primary} />,
  },
  {
    label: 'vegetables',
    image: require('./images/vegtable.png'),
    Icon: () => <IconMen fill={appColors.primary} />,
  },
  {
    label: 'snacks',
    image: require('./images/snacks.png'),
    Icon: () => <IconWomen fill={appColors.primary} />,
  },
  {
    label: 'provisions',
    image: require('./images/shop.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'beverages',
    image: require('./images/beverages.png'),
    Icon: () => <IconDevices fill={appColors.primary} />,
  },
  {
    label: 'alcohol',
    image: require('./images/alcohol.png'),
    Icon: () => <IconGaming fill={appColors.primary} />,
  },
  {
    label: 'baking',
    image: require('./images/baking.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'dairy',
    image: require('./images/grocery.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'frozens',
    image: require('./images/frozen.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'condiments',
    image: require('./images/condiments.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'cans-&-jars',
    image: require('./images/cans.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'home-&-living',
    image: require('./images/livin.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'back-to-school',
    image: require('./images/school.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'cleaning',
    image: require('./images/clean.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
  {
    label: 'personal-care',
    image: require('./images/personal.png'),
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
];
export const topBrands = [
  {
    label: 'Apple Inc',
    products: '5693 Products',
    icon: 'logo-apple',
  },
  {
    label: 'Google Llc',
    products: '6613 Products',
    icon: 'logo-google',
  },
];
export const recentSearches = [
  'heroin',
  'dry gin',
  'Caps',
  'Apple',
  'Google',
  'Macbook',
  'Sport weares',
];

export const deliveryTypes = [
  {
    label: 'Standard Delivery',
    subLabel: 'Order will be delivered between 3 - 5 business days',
    selected: true,
  },
  {
    label: 'Next Day Delivery',
    subLabel:
      'Place your order before 6pm and your items will be delivered the next day',
    selected: false,
  },
];
export const payTypes = [
  {
    label: 'Pay Now (with card)',
    subLabel: 'Pay online right now with your card details 100% safe',
    selected: true,
  },
  {
    label: 'Pay on Delivery',
    subLabel: 'make payment to our dispatch riders (card only)',
    selected: false,
  },
];
export const paymentMethods = ['dollar-sign', 'credit-card', 'layout'];

export const profileKeys = [
  {
    lebel: 'Edit Profile',
    icon: 'edit-3',
    route: 'Account',
  },
  {
    lebel: 'Shipping Address',
    icon: 'map-pin',
    route: 'Address',
  },
  {
    lebel: 'Wishlist',
    icon: 'heart',
    isNew: true,
    route: 'WishList',
  },
  {
    lebel: 'Order History',
    icon: 'clock',
    route: 'Orders',
  },
  {
    lebel: 'Track Order',
    icon: 'package',
    route: 'Orders',
  },
  {
    lebel: 'Cards',
    icon: 'credit-card',
    route: 'Account',
  },
  {
    lebel: 'Notifications',
    icon: 'bell',
    route: 'Account',
  },
  // {
  //   lebel: 'Sign Out',
  //   icon: 'log-out',
  //   route: 'Login',
  // },
];

export const orderList = [
  {
    label: 'AMU - 9249296 - N',
    amount: '$3503',
    status: 'In transit',
    color: 'yellow',
  },
  {
    label: 'OD - 424923192 - N',
    amount: '$3453',
    status: 'Delivered',
    color: 'primary',
  },
  {
    label: 'OD - 424923192 - N',
    amount: '$3503',
    status: 'Delivered',
    color: 'primary',
  },
  {
    label: 'OD - 424923192 - N',
    amount: '$4453',
    status: 'Delivered',
    color: 'primary',
  },
  /* {
    label:"",
    amount:"",
    status:"",
    color:""
  },
  {
    label:"",
    amount:"",
    status:"",
    color:""
  } */
];
