import { Dropdown } from "./components/Dropdown";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="pt-20"></div>
        <Dropdown label="Dropdown" items={["Item 1", "Item 2", "Item 3"]} />
        <Dropdown label="Dropdown 2" items={["Item2 1", "Item2 2", "Item2 3"]} />
      </div>
    </>
  );
}
