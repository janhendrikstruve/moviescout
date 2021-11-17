import React from 'react';
import Card from './Card';

const EXAMPLE = {
  title: "Hitmans Wife's Bodyguard",
  description:
    "The world's most lethal odd couple - bodyguard Michael Bryce and hitman Darius Kincaid - are back on anoth......",
  rating: 3.5,
  genres: ['Action', 'Comedy', 'Crime'],
  imageUrl: 'https://source.unsplash.com/200x300/?hitman',
};

export default {
  title: 'Component/Card',
  component: Card,
};

export const Regular = (): JSX.Element => (
  <Card content={EXAMPLE} display="regular" />
);
export const Compact = (): JSX.Element => (
  <Card content={EXAMPLE} display="compact" />
);
export const CompactWide = (): JSX.Element => (
  <Card content={EXAMPLE} display="compactWide" />
);
