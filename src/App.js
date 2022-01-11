import { useState } from "react";


export default function App() {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [pause, setPause] = useState();
  const [result, setResult] = useState();
  const [resultTwo, setResultTwo] = useState();

  const handleResult = () => {
    const saat = hour * 60;
    const dakika = (minute / 60) * 60;
    const birlestir = saat + dakika - pause;
    const cikar = (saat + dakika - pause) / 60;
    setResult(birlestir);
    setResultTwo(cikar);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setHour("");
    setMinute("");
    setPause("");
  };

  return (
    <div className="container mt-3">
      <form>
        <div className="form-group">
          <label htmlFor="hour">Saat : </label>
          <input
            type="number"
            className="form-control"
            id="hour"
            placeholder="Saati Giriniz"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="minute">Dakika : </label>
          <input
            type="number"
            className="form-control"
            id="minute"
            placeholder="Dakikayı Giriniz"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="minute">Mola : </label>
          <input
            type="number"
            className="form-control"
            id="minute"
            placeholder="Molayı Giriniz"
            value={pause}
            onChange={(e) => setPause(e.target.value)}
          />
        </div>
      </form>
      <div className="mt-2">
        <button
          className="btn btn-success"
          onClick={handleResult}
          style={{ marginRight: "5px" }}
        >
          Sonuç
        </button>
        <button onClick={handleReset} className="btn btn-danger">
          Sıfırla
        </button>
      </div>
      <div className="mt-3 text-center">
        {resultTwo}
      </div>
      <div className="mt-3 text-center">
        {result}
      </div>
      <hr />
    </div>
  );
}
