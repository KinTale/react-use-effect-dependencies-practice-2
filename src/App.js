import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("people");

  const [data, setData] = useState(null);

  console.log({ data });
  console.log('render')


  useEffect(() => {
    if (dataType === '') return;


    fetch(`https://swapi.dev/api/${dataType}/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
