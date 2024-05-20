import React from "react";
import GameContainer from "@/containers/game/index"
import { notFound } from "next/navigation";
import { fetchLanguage } from "@/services/game"
import { LanguageData } from "@/app/type/LanguageData";


interface PageProps {
  params: {
    game: string;
  };
}



const Page: React.FC<PageProps> = async ({ params }) => {
  const {game} = params

  const pageLanguage = await fetchLanguage(game);

  if(params.game !== "tr" && params.game !== "en")
    notFound()


  return (
    <div>
      <GameContainer pageLanguage={pageLanguage} params={params} />
    </div>
    
  );
};

export default Page;
