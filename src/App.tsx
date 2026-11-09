import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { OpeningScreen } from './components/OpeningScreen';
import { HeroSection } from './components/HeroSection';
import { MemoryCalendar } from './components/MemoryCalendar';
import { DaysCounter } from './components/DaysCounter';
import { PhotoGallery } from './components/PhotoGallery';
import { VideoMemories } from './components/VideoMemories';
import { SweetWords } from './components/SweetWords';
import { LoveLetter } from './components/LoveLetter';
import { InteractiveGift } from './components/InteractiveGift';
import { Timeline, Wishlist } from './components/Timeline';
import { Closing } from './components/Closing';
import { MusicPlayer } from './components/MusicPlayer';
import { Wave } from './components/Wave';

// Helper component to add waves over sections
const SectionWrapper = ({ 
  children, 
  bottomWaveColor,
  isClayWave = false
}: { 
  children: React.ReactNode, 
  bottomWaveColor?: string,
  isClayWave?: boolean
}) => (
  <div className="relative">
    {children}
    {bottomWaveColor && (
      <Wave 
        position="bottom" 
        fillColor={bottomWaveColor} 
        isClay={isClayWave}
        className="z-20 pointer-events-none" 
      />
    )}
  </div>
);

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative overflow-x-hidden selection:bg-rose-blush selection:text-white">
      <AnimatePresence>
        {!isOpened && (
          <OpeningScreen onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>

      {isOpened && (
        <div className="animate-fade-in">
          <MusicPlayer />
          
          <SectionWrapper bottomWaveColor="text-[#FDF8EE]" isClayWave={true}>
            <HeroSection />
          </SectionWrapper>
          
          <MemoryCalendar />
          
          <DaysCounter />
          
          <PhotoGallery />
          
          <VideoMemories />
          
          <SectionWrapper bottomWaveColor="text-[#FDF8EE]" isClayWave={true}>
            <SweetWords />
          </SectionWrapper>
          
          <LoveLetter />
          
          <SectionWrapper bottomWaveColor="text-[#FFF7F9]" isClayWave={true}>
            <InteractiveGift />
          </SectionWrapper>
          
          <Wishlist />
          
          <SectionWrapper bottomWaveColor="text-[#FCE4EC]" isClayWave={true}>
            <Timeline />
          </SectionWrapper>
          
          <Closing />
        </div>
      )}
    </div>
  );
}

export default App;
