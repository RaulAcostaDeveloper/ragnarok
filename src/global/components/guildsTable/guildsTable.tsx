import { SPANISH } from "@/global/language/constants/spanish";
import { columnsTable, dataTable } from "../table/table.model";
import { Table } from "../table";
import { useMemo } from "react";

type CastilloGuild = {
  guild: string;
  castillo: string;
  numero?: number | string;
  reino?: string;
};
type CastillosGuilds = {
  castillo: string;
  guild: string;
};

function asignarNumerosYReinos(arr: CastilloGuild[]): CastilloGuild[] {
  // Mapeo de castillos con su número y reino
  const mapaCastillos: Record<string, { numero: number; reino: string }> = {
    Skoegul: { numero: 7, reino: "Valkyria (Prontera)" },
    Gondul: { numero: 9, reino: "Valkyria (Prontera)" },
    Brynhildr: { numero: 5, reino: "Valkyria (Prontera)" },
    Kremhild: { numero: 1, reino: "Valkyria (Prontera)" },
    Hrish: { numero: 3, reino: "Valkyria (Prontera)" },
    // Aquí podrías luego agregar los de Greenwood (Payon) y otros reinos
  };

  // Se agrega la información correspondiente al arreglo
  arr.forEach((item) => {
    const datos = mapaCastillos[item.castillo];
    if (datos) {
      item.reino = datos.reino;
      item.numero = datos.numero;
    } else {
      // Valor por defecto si no existe el castillo
      item.reino = "Desconocido";
      item.numero = "No encontrado";
      console.warn(`Castillo no encontrado: ${item.castillo}`);
    }
  });

  return arr;
}

interface Props {
  castillosGuilds: CastillosGuilds[];
}

export const GuildsTable = ({ castillosGuilds }: Props) => {
  const resultado = asignarNumerosYReinos(castillosGuilds);

  const columns: columnsTable = [
    {
      columnName: "Guild",
      defaultSpace: 4,
    },
    {
      columnName: "Reino",
      defaultSpace: 6,
      orderColumn: true,
    },
    {
      columnName: "Número",
      defaultSpace: 3,
      orderColumn: true,
    },
    {
      columnName: "Castillo",
      defaultSpace: 3,
      orderColumn: true,
    },
  ];
  const data: dataTable = useMemo(() => {
    return resultado.map((value) => ({
      guild: value.guild,
      reino: value.reino ?? "",
      numero: value.numero ?? "",
      castillo: value.castillo,
    }));
  }, [resultado]);

  return (
    <>
      {resultado && data && (
        <Table
          LANGUAGE={SPANISH}
          title="Resultados de la woe 12 de Octubre 2025"
          columns={columns}
          data={data}
        />
      )}
    </>
  );
};
