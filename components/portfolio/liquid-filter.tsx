/** The lens the liquid glass refracts through (used by .glass via backdrop-filter in Chromium browsers) */
export function LiquidFilter() {
  return (
    <svg width='0' height='0' aria-hidden className='absolute'>
      <filter id='liquid-lens' x='0' y='0' width='100%' height='100%'>
        <feTurbulence type='fractalNoise' baseFrequency='0.008 0.014' numOctaves='2' seed='7' result='noise' />
        <feGaussianBlur in='noise' stdDeviation='2' result='soft' />
        <feDisplacementMap in='SourceGraphic' in2='soft' scale='34' xChannelSelector='R' yChannelSelector='G' />
      </filter>
    </svg>
  )
}
