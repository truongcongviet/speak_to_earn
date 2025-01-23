import { PropsWithChildren } from "react";
import Navigation from "./Navigation";
const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center rounded-md p-2 pb-0 border border-gray-300 bg-background-learn bg-no-repeat bg-cover w-full h-screen">
      <div className="py-5 text-center">
      <p className="text-5xl mb-5">SPEAK TO EARN</p>

        <div className="font-extrabold text-3xl md:text2xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-50% to-slate-600">
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
      <div className="w-full flex-none">
        <Navigation />
      </div>
    </div>
  );
};

export default Container;
