import React from 'react';
import { Composition } from 'remotion';
import { KOPAKOPIProduct } from './video';

export const RemotionRoot: React.FC = () => (
  <Composition
    id="KOPAKOPIProduct"
    component={KOPAKOPIProduct}
    durationInFrames={600}
    fps={30}
    width={1080}
    height={1920}
  />
);
