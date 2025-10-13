import { Table } from "@/global/components/table";
import { columnsTable } from "@/global/components/table/table.model";
import { SPANISH } from "@/global/language/constants/spanish";
import Image from "next/image";

export default function Home() {
  const vehicleColumns: columnsTable = [
    {
      columnName: "Guild",
      defaultSpace: 4,
    },
    {
      columnName: "Castillo",
      defaultSpace: 3,
      orderColumn: true,
    },
  ];
  const vehiclesTableData = [
    {
      guild: "Dream Team",
      name: "Yesnelph",
    },
    {
      guild: "Retired",
      name: "Bergel",
    },
    {
      guild: "Retired",
      name: "Mersetzdeitz",
    },
    {
      guild: "Amazing",
      name: "Kriemhid",
    },
    {
      guild: "Guerreiros.do.Emperium",
      name: "Swanhild",
    },
    {
      guild: "xFantasyTeamx",
      name: "Fadhgridh",
    },
    {
      guild: "xFantasyTeamx",
      name: "Skoegul",
    },
    {
      guild: "CONFLICT",
      name: "Gondul",
    },
  ];
  return (
    <div>
      <Table
        LANGUAGE={SPANISH}
        title="Resultados de la woe 12 de Octubre 2025"
        columns={vehicleColumns}
        data={vehiclesTableData}
      />
      <div className="sad">
        <p>
          Pendiente: Poner el número del castillo según la posición del mapa
        </p>
        <p>Pendiente: Poner el mapa (valkyria, brithonia, etc)</p>
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
