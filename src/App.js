import { useState } from "react";


export default function App() {
  //const date = new Date();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [pause, setPause] = useState(null);
  const [employee, setEmployee] = useState();
  const [target, setTarget] = useState();
  const [shift, setShift] = useState();
  const [result, setResult] = useState();
  const [resultTwo, setResultTwo] = useState();
  const [resultThree, setResultThree] = useState();
  const [resultFour, setResultFour] = useState();

  const handleResult = () => {
    // const saat = hour * 60;
    // const dakika = (minute / 60) * 60;
    // const birlestir = saat + dakika - pause;
    // const cikar = (saat + dakika - pause) / 60;
    // setResult(birlestir);
    // setResultTwo(cikar);
    const calculation = (hour - shift) * 60 + (minute - pause);
    const result = calculation / 60;
    setResult(calculation);
    setResultTwo(result);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setHour("");
    setMinute("");
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
        <div className="form-row">
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
          <select class="form-select mt-3" onChange={(e) => setShift(e.target.value)}>
            <option selected>Vardiya Seçiniz</option>
            <option value="7">7</option>
            <option value="15">15</option>
            <option value="23">23</option>
            <option value="19">19</option>
          </select>
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
      <div className="row">
        <div className="col-md-6 col-sm-6 col-6">
          <label className="w-100">
            Saat:
            <input type="number" value={resultTwo} className="form-control" />
          </label>
        </div>
        <div className="col-md-6 col-dm-6 col-6">
          <label className="w-100">
            Dakika:
            <input type="number" value={result} className="form-control" />
          </label>
        </div>
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
      <div className="row">
        <div className="col-md-6 col-sm-6 col-6">
          <label className="w-100" >
            Dakika Hedefi:
            <input type="number" value={resultThree} className="form-control" />
          </label>
        </div>
        <div className="col-md-6 col-sm-6 col-6">
          <label className="w-100">
            Gün Sonu Hedefi:
            <input type="number" value={resultFour} className="form-control" />
          </label>
        </div>
      </div>
      <hr />
    </div>
  );
}
