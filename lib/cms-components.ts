"use client"

import { Builder } from '@builder.io/react';
// import AllArtists from '@/components/allArtists/allArtists';
// import Card from '@/components/card/card';
// import Cta from '@/components/cta/cta';
// import Button from '@/components/button/button';
import dynamic from 'next/dynamic';

Builder.registerComponent(dynamic(() => import('../components/card/card')), {
  name: 'Info Card',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'This is the card\'s headline.' },
    {
      name: 'content',
      type: 'richText',
      defaultValue: 'This is the card\'s body.',
    },
  ],
});