import readingTime from "reading-time";
export default function Page() {
  const {minutes, text, words, time} = readingTime("ddd");
  return (
    <div>
      <h1>Readtime: {minutes}, {text}, {words} , {time}</h1>
    </div>
  );
}
