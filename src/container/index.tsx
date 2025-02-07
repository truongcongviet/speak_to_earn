import { PropsWithChildren } from "react";
import Confetti from "../components/FireWork";
// import Navigation from "./Navigation";
const Container = ({ children }: PropsWithChildren) => {
  // const [showCelebration, setShowCelebration] = useState(false);

  // const handleClick = () => {
  //   setShowCelebration(true);
  //   // Automatically hide celebration after duration
  //   setTimeout(() => setShowCelebration(false), 3000);
  // };
  return (
    <div className="container flex flex-col items-center rounded-md pb-0 w-full h-screen pt-40 lg:pt-48">
      <div className="py-5 text-center">
      <p className="text-5xl mb-5 font-mono">SPEAK TO EARN</p>

        <div className="font-extrabold text-3xl md:text2xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-50% to-slate-800 ">
       Learn English while making money in{" "}
          <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
              <li>Languages</li>
              <li>AI</li>
              <li>Crypto</li>
              <li aria-hidden="true">Languages</li>
            </ul>
          </span>
        </div>

      </div>
      <div className="flex-1">{children}</div>
      {/* <div className="w-full flex-none">
        <Navigation />
      </div> */}
      {<Confetti />}

      {/* {showCelebration && (
        <Celebrate
          isActive={true}
          duration={3000}
          particleCount={100}
          colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']}
        />
      )} */}
    </div>
  );
};

export default Container;
