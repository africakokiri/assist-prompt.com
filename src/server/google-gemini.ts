import { GoogleGenerativeAI } from "@google/generative-ai";

const err = () => {
  console.error("Error: Google gemini");
  process.exit(1);
};

export const GEMINI = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI ?? err());
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Hello, GEMINI";
  // const image = {
  //   inlineData: {
  //     data: Buffer.from(fs.readFileSync("PATH")).toString("base64"),
  //     mimeType: "image/png"
  //   }
  // };

  return (
    (await model.generateContent([prompt])).response.candidates![0].content.parts[0].text ??
    err()
  );
};
