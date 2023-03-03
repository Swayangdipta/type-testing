import {BsKeyboardFill} from 'react-icons/bs'
import Controls from './components/Controls'
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
        <header className="w-screen h-[50px] bg-zinc-900">
          <div className="ml-[30px] h-full flex gap-2 items-center justify-start select-none">
            <BsKeyboardFill className='text-zinc-100 text-[26px]' />
            <h1 className='text-zinc-100 text-[22px]'>TypeTesting</h1>
          </div>
        </header>
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
