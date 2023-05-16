import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import "./App.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const App = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState("");

  const fetchHistogramData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      setFileData(response.data); // Set the imported file data
      const wordsCount = response.data
        .replace(/[^\w\s]/gi, "") // remove punctuation
        .toLowerCase()
        .split(/\s+/) // split by whitespace
        .reduce((acc, word) => {
          acc[word] = acc[word] ? acc[word] + 1 : 1;
          return acc;
        }, {});
      const histogramData = Object.entries(wordsCount)
        .sort((a, b) => b[1] - a[1]) // sort by count in descending order
        .slice(0, 20) // take top 20
        .map(([word, count]) => ({ word, count }));
      setHistogramData(histogramData);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleExportCSV = () => {
    const csvData = Papa.unparse(histogramData);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "histogram.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportTextFile = () => {
    const blob = new Blob([fileData], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "importedTextFile.txt");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className = "center">
      <button onClick={fetchHistogramData} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
      {!!histogramData.length && (
        <div>
          <button onClick={handleExportCSV}>Export CSV</button>
          <button onClick={handleExportTextFile} disabled={!fileData}>
            Export Text File
          </button>
          <BarChart width={800} height={400} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="rgb(2 56 64)" />
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default App;
