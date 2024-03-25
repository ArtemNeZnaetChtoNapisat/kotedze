// import { getPlaiceholder } from "plaiceholder";

export default async (req, res) => {
  // const { body } = req;
  // const { url } = body;

  //   const src = "http://localhost:3000/_next/image?url=https%3A%2F%2Fstatic.pepper.ru%2Fthreads%2Fraw%2FOqqd6%2F375200_1%2Fre%2F1024x1024%2Fqt%2F60%2F375200_1.jpg&w=256&q=75";
   
  //   const buffer = await fetch(src).then(async (res) =>
  //     Buffer.from(await res.arrayBuffer())
  //   );
   
  //   const { base64 } = await getPlaiceholder(buffer);
   
  //   console.log(base64);
  //const { base64 } = getPlaiceholder("https://static.pepper.ru/threads/raw/XBgxU/430519_1/re/1024x1024/qt/60/430519_1.jpg");

  res.status(200).send("ok");
};