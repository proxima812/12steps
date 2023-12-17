// import { Resvg } from "@resvg/resvg-js";
// import { type CollectionEntry } from "astro:content";
// import satori, { type SatoriOptions } from "satori";
// import postOgImage from "./og-templates/post";

// const fetchFonts = async () => {
//   const fontFileBold = await fetch(
//     "https://www.1001fonts.com/download/font/open-sans.bold.ttf",
//   );
//   const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();
//   return { fontBold };
// };

// const { fontBold } = await fetchFonts();

// const options: SatoriOptions = {
//   width: 1200,
//   height: 630,
//   embedFont: true,
//   fonts: [
//     // {
//     //   name: "IBM Plex Mono",
//     //   data: fontRegular,
//     //   weight: 400,
//     //   style: "normal",
//     // },
//     {
//       name: "Inter",
//       data: fontBold,
//       weight: 700,
//       style: "normal",
//     },
//   ],
// };

// function svgBufferToPngBuffer(svg: string) {
//   const resvg = new Resvg(svg);
//   const pngData = resvg.render();
//   return pngData.asPng();
// }

// export async function generateOgImageForPost(post: CollectionEntry<"posts">) {
//   const svg = await satori(postOgImage(post), options);
//   return svgBufferToPngBuffer(svg);
// }
