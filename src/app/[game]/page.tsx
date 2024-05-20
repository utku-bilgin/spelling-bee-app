import React from "react";
import GameContainer from "@/containers/game/index"

import { notFound } from "next/navigation";

import { fetchLanguage } from "@/services/game"
import { LanguageData } from "@/app/type/LanguageData";

import { fetchIsWord } from "@/services/game";

interface PageProps {
  params: {
    game: string;
  };
  pageLanguage: LanguageData;
}



const Page: React.FC<PageProps> = async ({ params }) => {
  const {game} = params

  const pageLanguage = await fetchLanguage(game);

  if(params.game !== "tr" && params.game !== "en")
    notFound()
  
    // if (searchParams.error === "true") {
    //   throw new Error("Something went wrong!");
    // }
    // bunuda params ın yanına parametre olarak vericez ve backend ten error gelmesi durumunda error sayfasına yönlendirecek


  return (
    <div>
      <GameContainer pageLanguage={pageLanguage} params={params} />
    </div>
    
  );
};

export default Page;
