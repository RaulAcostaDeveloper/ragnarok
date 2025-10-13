import { GuildsTable } from "@/global/components/guildsTable/guildsTable";
import { Table } from "@/global/components/table";
import { columnsTable } from "@/global/components/table/table.model";
import { SPANISH } from "@/global/language/constants/spanish";
import Image from "next/image";

export default function Home() {
  const castillosGuild = [
    { guild: "DreamTeam", castillo: "Yesnelph" },
    { guild: "Retired", castillo: "Bergel" },
    { guild: "Retired", castillo: "Merseedetz" },
    { guild: "Amazing", castillo: "Kriemhild" },
    { guild: "Guerreiros.do.Emperium", castillo: "Swanhild" },
    { guild: "FantasyTeam", castillo: "Fadhgridh" },
    { guild: "FantasyTeam", castillo: "Skoegul" },
    { guild: "CONFLICT", castillo: "Gondul" },
    { guild: "TOROSLocos", castillo: "Bright Arbor" },
    { guild: "Retired", castillo: "Sacred Palace" },
    { guild: "FantasyTeam", castillo: "Holy Shadow Palace" },
    { guild: "FearLess", castillo: "Scarlet Palace" },
    { guild: "JOES", castillo: "Bamboo Grove Hill" },
    { guild: "FantasyTeam", castillo: "Neuschwanstein" },
    { guild: "JOES", castillo: "Hohenschwangau" },
    { guild: "Retired", castillo: "Nuenberg" },
    { guild: "ANBU", castillo: "Wuerzburg" },
  ];
  return (
    <div>
      <GuildsTable castillosGuilds={castillosGuild} />
      <p>Pendiente: Poner el número del castillo según la posición del mapa</p>
      <p>Pendiente: Poner el mapa (valkyria, brithonia, etc)</p>
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
