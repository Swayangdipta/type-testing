import Controls from './components/Controls'
import Header from './components/Header';
import Results from './components/Results';
import TextToWriteSection from './components/TextToWriteSection';
import TypingSection from './components/TypingSection';
import { ControlProvider } from './ControlContext';
import { TimeProvider } from './TimeContext.';
function App() {
  return (
    <ControlProvider>
      <TimeProvider>
      <div className="w-screen h-screen fixed top-0 left-0 bg-zinc-700">
        <Header />
        <div className='flex justify-between w-[calc(100vw_-_60px)] mx-auto py-[30px] h-[calc(100vh_-_50px)] gap-10'>
          <div className="leftSection w-[300px] flex flex-col gap-4 h-full">
            <Controls />
            <Results />
          </div>
          <div className="RightSect w-full h-full flex flex-col gap-4">
            <TextToWriteSection />
            <TypingSection />
          </div>
        </div>
      </div>    
      </TimeProvider>
    </ControlProvider>
  );
}

export default App;
