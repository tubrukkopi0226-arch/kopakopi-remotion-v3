import React from 'react';
import {
  AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig,
  interpolate, Easing, Sequence,
} from 'remotion';

const gold = '#D9A85B';
const cream = '#F4E9D8';

const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{ pointerEvents: 'none', opacity: 0.2, backgroundImage: 'radial-gradient(rgba(255,255,255,.28) .7px, transparent .7px)', backgroundSize: '7px 7px', transform: `translate(${Math.sin(frame / 17) * 3}px, ${Math.cos(frame / 23) * 3}px)` }} />;
};

const Particles: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{ pointerEvents: 'none' }}>
    {Array.from({ length: 24 }, (_, i) => {
      const x = (i * 137.5) % 100;
      const baseY = (i * 71) % 110;
      const y = (baseY - frame * (0.13 + (i % 5) * 0.025) + 120) % 110;
      const size = 2 + (i % 4) * 1.4;
      return <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, width: size, height: size, borderRadius: '50%', background: i % 3 === 0 ? gold : '#B77B45', opacity: 0.18 + (i % 4) * 0.08, boxShadow: `0 0 12px ${gold}` }} />;
    })}
  </AbsoluteFill>;
};

const Product: React.FC<{ start: number; end: number; scale?: number }> = ({ start, end, scale = 1 }) => {
  const frame = useCurrentFrame();
  const local = frame - start;
  const progress = interpolate(local, [0, end - start], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const float = Math.sin(frame / 18) * 9;
  const zoom = interpolate(progress, [0, 1], [0.83, 1.04]) * scale;
  return <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ position: 'absolute', width: 700, height: 900, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(169,91,37,.22), transparent 68%)', filter: 'blur(30px)' }} />
    <Img src={staticFile('kopakopi-product.jpg')} style={{ width: 790, height: 1120, objectFit: 'contain', transform: `translateY(${float + (1-progress)*90}px) scale(${zoom})`, filter: 'drop-shadow(0 38px 45px rgba(0,0,0,.62))' }} />
  </div>;
};

const TextLine: React.FC<{ children: string; top: number; delay?: number; size?: number; color?: string }> = ({ children, top, delay = 0, size = 58, color = cream }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, 18], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const y = interpolate(frame - delay, [0, 18], [28, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <div style={{ position: 'absolute', top, left: 50, right: 50, textAlign: 'center', color, fontFamily: 'Arial, sans-serif', fontWeight: 900, fontSize: size, letterSpacing: 2, lineHeight: 1.05, opacity, transform: `translateY(${y}px)`, textShadow: '0 5px 22px rgba(0,0,0,.55)' }}>{children}</div>;
};

const Background: React.FC = () => <AbsoluteFill style={{ background: 'radial-gradient(ellipse at 50% 42%, #352014 0%, #160F0B 45%, #070707 100%)' }}>
  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, transparent 49.8%, rgba(217,168,91,.09) 50%, transparent 50.2%), linear-gradient(rgba(217,168,91,.035) 1px, transparent 1px)', backgroundSize: '100% 100%, 100% 120px', maskImage: 'linear-gradient(transparent, black 25%, black 75%, transparent)' }} />
  <div style={{ position: 'absolute', top: 100, left: 100, right: 100, height: 2, background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, opacity: .55 }} />
</AbsoluteFill>;

export const KOPAKOPIProduct: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = interpolate(frame, [570, 599], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const sweepX = interpolate(frame % 180, [0, 180], [-500, 1600]);
  return <AbsoluteFill style={{ backgroundColor: '#080706', color: cream, opacity: fadeOut }}>
    <Background />
    <Particles />
    <Grain />
    <Sequence from={0} durationInFrames={150}>
      <Product start={0} end={150} scale={0.93} />
      <TextLine top={230} delay={12} size={48} color={gold}>BUKAN SEKADAR KOPI</TextLine>
      <TextLine top={1500} delay={35} size={66}>TEMAN DI SETIAP MOMEN</TextLine>
      <div style={{ position: 'absolute', top: 1600, width: '100%', textAlign: 'center', color: '#D6C4AE', fontSize: 27, letterSpacing: 7 }}>KOPAKOPI COLD BREW COFFEE</div>
    </Sequence>
    <Sequence from={150} durationInFrames={150}>
      <Product start={0} end={150} scale={1.02} />
      <TextLine top={240} delay={8} size={76}>PRAKTIS.</TextLine>
      <TextLine top={330} delay={26} size={76} color={gold}>FRESH.</TextLine>
      <TextLine top={420} delay={44} size={76}>NIKMAT.</TextLine>
      <div style={{ position: 'absolute', bottom: 240, left: 80, right: 80, height: 2, background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} />
    </Sequence>
    <Sequence from={300} durationInFrames={150}>
      <Product start={0} end={150} scale={1.08} />
      <TextLine top={245} delay={8} size={52} color={gold}>COLD BREW COFFEE</TextLine>
      <TextLine top={1510} delay={30} size={72}>200 ml</TextLine>
      <div style={{ position: 'absolute', top: 1630, width: '100%', textAlign: 'center', color: '#D6C4AE', fontSize: 28, letterSpacing: 5 }}>SIAP MENEMANI HARI</div>
    </Sequence>
    <Sequence from={450} durationInFrames={150}>
      <Product start={0} end={150} scale={1.04} />
      <TextLine top={235} delay={8} size={68}>KOPAKOPI</TextLine>
      <TextLine top={330} delay={24} size={42} color={gold}>PRAKTIS • FRESH • NIKMAT</TextLine>
      <div style={{ position: 'absolute', bottom: 230, left: 80, right: 80, textAlign: 'center', fontSize: 32, fontWeight: 700, letterSpacing: 4, color: cream, opacity: interpolate(frame, [40, 65], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>COBA KOPAKOPI HARI INI</div>
    </Sequence>
    <div style={{ position: 'absolute', top: 0, bottom: 0, width: 240, transform: `translateX(${sweepX}px) skewX(-18deg)`, background: 'linear-gradient(90deg, transparent, rgba(255,231,188,.08), transparent)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: 65, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', color: 'rgba(244,233,216,.45)', fontSize: 18, letterSpacing: 4 }}><span>KOPAKOPI LAB</span><span>EST. COFFEE MOMENT</span></div>
  </AbsoluteFill>;
};
