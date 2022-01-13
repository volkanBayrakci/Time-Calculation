import { useState } from "react";


export default function App() {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [pause, setPause] = useState(null);
  const [employee, setEmployee] = useState();
  const [target, setTarget] = useState();
  const [result, setResult] = useState();
  const [resultTwo, setResultTwo] = useState();
  const [resultThree, setResultThree] = useState();
  const [resultFour, setResultFour] = useState();




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
    setEmployee("");
    setTarget("");
  };

  const handleClick = () => {
    const personel = employee
    const hedef = target
    const birlestir = hedef / 60 / personel / 7.25
    const toplam = birlestir * 435
    setResultThree(birlestir)
    setResultFour(toplam.toFixed(0))
  }

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
          <label htmlFor="pause">Mola : </label>
          <input
            type="number"
            className="form-control"
            id="pause"
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
          disabled={!hour || !minute}
        >
          Sonuç
        </button>
        <button onClick={handleReset} className="btn btn-danger">
          Sıfırla
        </button>
      </div>
      <div className="mt-3 text-center">
        {resultTwo} Saat
      </div>
      <div className="mt-3 text-center">
        {result} Dakika
      </div>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="employee">Personel : </label>
          <input
            type="number"
            className="form-control"
            id="employee"
            placeholder="Personel Sayısını Giriniz"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="target">Hedef : </label>
          <input
            type="number"
            className="form-control"
            id="target"
            placeholder="Hedefi Giriniz"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
      </form>
      <div className="mt-2">
        <button
          className="btn btn-success"
          onClick={handleClick}
          style={{ marginRight: "5px" }}
          disabled={!employee || !target}
        >
          Sonuç
        </button>
        <button onClick={handleReset} className="btn btn-danger">
          Sıfırla
        </button>
      </div>
      <div className="mt-3 text-center">
        {resultThree}
      </div>
      <div className="mt-3 text-center">
        {resultFour} Adet
      </div>
      <hr />
    </div>
  );
}
