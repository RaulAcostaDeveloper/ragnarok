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

function asignarNumerosYReinos(): CastilloGuild[] {
  const castillosGuild: CastilloGuild[] = [
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

  // Mapeo de castillos con su número y reino
  const mapaCastillos: Record<string, { numero: number; reino: string }> = {
    Skoegul: { numero: 7, reino: "Valkyria (Prontera)" },
    Gondul: { numero: 9, reino: "Valkyria (Prontera)" },
    Fadhgridh: { numero: 5, reino: "Valkyria (Prontera)" },
    Kriemhild: { numero: 1, reino: "Valkyria (Prontera)" },
    Swanhild: { numero: 3, reino: "Valkyria (Prontera)" },

    Bergel: { numero: 8, reino: "Britoniah (Geffen)" },
    Yesnelph: { numero: 7, reino: "Britoniah (Geffen)" },
    Eeyolbriggar: { numero: 9, reino: "Britoniah (Geffen)" },
    Repherion: { numero: 2, reino: "Britoniah (Geffen)" },
    Mersetzdeitz: { numero: 3, reino: "Britoniah (Geffen)" },

    Hohenschwangau: { numero: 7, reino: "Luina (Aldebaran)" },
    Wuerzburg: { numero: 9, reino: "Luina (Aldebaran)" },
    Neuschwanstein: { numero: 1, reino: "Luina (Aldebaran)" },
    Nuenberg: { numero: 2, reino: "Luina (Aldebaran)" },
    Rothenburg: { numero: 3, reino: "Luina (Aldebaran)" },

    "Bright Arbor": { numero: 7, reino: "Greenwood (Payon)" },
    "Bamboo Grove Hill": { numero: 8, reino: "Greenwood (Payon)" },
    "Holy Shadow Palace": { numero: 9, reino: "Greenwood (Payon)" },
    "Scarlet Palace": { numero: 3, reino: "Greenwood (Payon)" },
    "Sacred Altar": { numero: 1, reino: "Greenwood (Payon)" },

    // Aquí podrías luego agregar los de Greenwood (Payon) y otros reinos
  };

  // Se agrega la información correspondiente al arreglo
  castillosGuild.forEach((item) => {
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

  return castillosGuild;
}

export const GuildsTable = () => {
  const resultado = asignarNumerosYReinos();

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
          title="Resultados de la woe 2 de Noviembre 2025"
          columns={columns}
          data={data}
          windowMaxSize={50}
        />
      )}
    </>
  );
};
