import { GuildsTable } from "@/global/components/guildsTable/guildsTable";
import { Table } from "@/global/components/table";
import { columnsTable } from "@/global/components/table/table.model";
import { SPANISH } from "@/global/language/constants/spanish";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <GuildsTable />
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
