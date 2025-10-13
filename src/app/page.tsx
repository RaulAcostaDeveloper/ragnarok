import { Table } from "@/global/components/table";
import { columnsTable } from "@/global/components/table/table.model";
import { SPANISH } from "@/global/language/constants/spanish";

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
    </div>
  );
}
