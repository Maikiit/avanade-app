import { useState } from "react";
import "./CsvReader.css";

export default function CsvReader() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  /**
   * Boton Submit  
   */
   const submit = () => {
    const file = csvFile;
    const reader = new FileReader();
    // Lectura del archivo
    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text);
    };
    reader.readAsText(file);
  };

  /**
   * 
   * @param {Texto} str 
   * @param {delimitador} delim 
   */
  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });
    setCsvArray(newArray);
  };



  return (
    <form id='csv-form'>
      <input
        type='file'
        accept='.csv'
        id='csvFile'
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      ></input>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (csvFile) submit();
        }}
      >
        Submit
      </button>
      <br />
      <br />
      {csvArray.length > 0 ? (
        <>
          <table>
            <thead>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Adj Close</th>
              <th>Volume</th>
            </thead>
            <tbody>
              {csvArray.map((item, i) => (
                <tr key={i}>
                  <td>{item.Date}</td>
                  <td>{item.Open}</td>
                  <td>{item.High}</td>
                  <td>{item.Low}</td>
                  <td>{item.Close}</td>
                  <td>{item["Adj Close"]}</td>
                  <td>{item.Volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </form>
  );
}

// "Date"
// 1: "Open"
// 2: "High"
// 3: "Low"
// 4: "Close"
// 5: "Adj Close"
// 6: "Volume"