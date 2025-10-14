import { GuildsTable } from "@/global/components/guildsTable/guildsTable";
import { Table } from "@/global/components/table";
import { columnsTable } from "@/global/components/table/table.model";
import { SPANISH } from "@/global/language/constants/spanish";
import Image from "next/image";

export default function Home() {
  const castillosGuild = [
    // Prontera
    { guild: "FantasyTeam", castillo: "Skoegul" },
    { guild: "CONFLICT", castillo: "Gondul" },
    { guild: "FantasyTeam", castillo: "Fadhgridh" },
    { guild: "Amazing", castillo: "Kriemhild" },
    { guild: "Guerreiros.do.Emperium", castillo: "Swanhild" },

    // Geffen
    { guild: "Retired", castillo: "Bergel" },
    { guild: "DreamTeam", castillo: "Yesnelph" },
    { guild: "Retired", castillo: "Mersetzdeitz" },
    { guild: " - ", castillo: "Eeyolbriggar" },
    { guild: " - ", castillo: "Repherion" },

    // Aldebaran
    { guild: "JOES", castillo: "Hohenschwangau" },
    { guild: "ANBU", castillo: "Wuerzburg" },
    { guild: "FantasyTeam", castillo: "Neuschwanstein" },
    { guild: "Retired", castillo: "Nuenberg" },
    { guild: "Retired", castillo: "Rothenburg" },

    //Payon
    { guild: "Retired", castillo: "Sacred Altar" },
    { guild: "FearLess", castillo: "Scarlet Palace" },
    { guild: "FantasyTeam", castillo: "Holy Shadow Palace" },
    { guild: "JOES", castillo: "Bamboo Grove Hill" },
    { guild: "TOROSLocos", castillo: "Bright Arbor" },
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
