interface WaveProps {
  position: 'top' | 'bottom';
  fillColor?: string; // Tailwind color class or hex, e.g., 'text-baby-pink' or 'fill-[#FFF]'
  className?: string; // To add z-index or other tweaks
  isClay?: boolean;   // Enable 3D Claymorphism wave effect
}

export function Wave({ 
  position, 
  fillColor = 'currentColor', 
  className = '',
  isClay = false 
}: WaveProps) {
  const isTop = position === 'top';

  // Extended paths (V128 / V-8) to ensure 100% seamless bleed into adjacent section with 0 horizontal lines
  const bottomWavePath = "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V128H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z";
  const bottomCrestPath = "M1200,95.8C1132.19,118.92,1055.71,111.31,985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35";

  const topWavePath = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V-8H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
  const topCrestPath = "M0,27.35A600.21,600.21,0,0,0,321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3";

  const wavePath = isTop ? topWavePath : bottomWavePath;
  const crestPath = isTop ? topCrestPath : bottomCrestPath;

  return (
    <div 
      className={`absolute left-0 w-full overflow-visible leading-[0] ${isTop ? '-top-[2px]' : '-bottom-[2px]'} ${className}`}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[120px] overflow-visible"
        style={{ transform: !isTop ? 'scaleX(-1)' : 'none' }}
      >
        {isClay ? (
          <>
            {/* 3D Crest Elevation Drop Shadow (Applied strictly to the wavy curve, NEVER casting shadows on the straight bottom edge) */}
            <path
              d={crestPath}
              fill="none"
              stroke="rgba(166, 155, 145, 0.25)"
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                filter: isTop 
                  ? 'drop-shadow(0px 6px 12px rgba(166,155,145,0.25))' 
                  : 'drop-shadow(0px -6px 12px rgba(166,155,145,0.25))'
              }}
            />

            {/* Layer 1: Pastel Pink Clay Under-Ridge (Follows crest curve only, no horizontal base) */}
            <path
              d={crestPath}
              fill="none"
              stroke="#FCE4EC"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.8"
              transform={isTop ? "translate(0, 4)" : "translate(0, -4)"}
            />

            {/* Layer 2: Main Solid Clay Wave Fill (Extended to V128/V-8 with NO drop shadow on straight edge) */}
            <path
              d={wavePath}
              className={fillColor.startsWith('#') ? '' : fillColor}
              fill={fillColor.startsWith('#') ? fillColor : 'currentColor'}
            />

            {/* Layer 3: Soft Clay Inset Ridge Shadow */}
            <path
              d={crestPath}
              fill="none"
              stroke="rgba(166, 155, 145, 0.2)"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={isTop ? "translate(0, -1)" : "translate(0, 1.5)"}
            />

            {/* Layer 4: Specular Clay Crest Highlight (Smooth 3D Bevel Rim) */}
            <path
              d={crestPath}
              fill="none"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d={wavePath}
            className={fillColor.startsWith('#') ? '' : fillColor}
            fill={fillColor.startsWith('#') ? fillColor : 'currentColor'}
          />
        )}
      </svg>
    </div>
  );
}
