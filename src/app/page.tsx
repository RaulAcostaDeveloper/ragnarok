import { GuildsTable } from "@/global/components/guildsTable/guildsTable";
import { Table } from "@/global/components/table";
import { columnsTable } from "@/global/components/table/table.model";
import { SPANISH } from "@/global/language/constants/spanish";
import Image from "next/image";

export default function Home() {
  const castillosGuild = [
    // Prontera
    { guild: "ANBU", castillo: "Swanhild" },
    { guild: "CONFLICT", castillo: "Kriemhild" },
    { guild: "FearLess", castillo: "Fadhgridh" },
    { guild: "FantasyTeam", castillo: "Skoegul" },
    { guild: "TorosLocos", castillo: "Gondul" },

    // Geffen
    { guild: "FantasyTeam", castillo: "Repherion" },
    { guild: "Retired", castillo: "Yesnelph" },
    { guild: "Villains", castillo: "Eeyolbriggar" },
    { guild: "Retired", castillo: "Bergel" },
    { guild: "Retired", castillo: "Mersetzdeitz" },

    // Aldebaran
    { guild: "FantasyTeam", castillo: "Hohenschwangau" },
    { guild: "Villains", castillo: "Neuschwanstein" },
    { guild: "Retired", castillo: "Nuenberg" },
    { guild: "JOES", castillo: "Wuerzburg" },
    { guild: "JOES", castillo: "Rothenburg" },

    //Payon
    { guild: "DreamTeam", castillo: "Bamboo Grove Hill" },
    { guild: "DreamTeam", castillo: "Bright Arbor" },
    { guild: "Retired", castillo: "Sacred Altar" },
    { guild: "TorosLocos", castillo: "Holy Shadow Palace" },
    { guild: "Divas", castillo: "Scarlet Palace" },
  ];
  return (
    <div>
      <GuildsTable castillosGuilds={castillosGuild} />
      <div className="sad">
        <Image
          src={"/ro/MAPA_WOE_ROLA.png"}
          width={735}
          height={405}
          alt="mapa woe"
        />
      </div>
    </div>
  );
}
