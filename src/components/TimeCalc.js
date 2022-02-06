import { useState } from "react"

const TimeCalc = () => {
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [pause, setPause] = useState(null);
  const [shift, setShift] = useState();
  const [result, setResult] = useState();
  const [resultTwo, setResultTwo] = useState();


  const handleResult = () => {
    if (hour >= shift) {
      const calculation = (hour - shift) * 60 + (minute - pause);
      const divide = calculation / 60;
      setResult(calculation);
      setResultTwo(divide);
    } else if (shift === "23" || shift === "19") {
      const time = 24;
      const calculationTwo = (time - shift) * 60 + hour * 60 + (minute - pause);
      const divideTwo = calculationTwo / 60;
      setResult(calculationTwo);
      setResultTwo(divideTwo);
    }else{
      const calculation = (hour - shift) * 60 + (minute - pause);
      const divide = calculation / 60;
      setResult(calculation);
      setResultTwo(divide);
    }
  };

  const handleReset = (e) => {
    e.preventDefault()
    setHour("")
    setMinute("")
  }

  return (
    <>
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
            <option value="7">07:00-15:00</option>
            <option value="15">15:00-23:00</option>
            <option value="23">23:00-07:00</option>
            <option value="7">07:00-17:30</option>
            <option value="19">19:00-07:00</option>
            <option value="7">07:00-19:00</option>
          </select>
        </div>
      </form>
      <div className="mt-2">
        <button
          className="btn btn-success"
          onClick={handleResult}
          style={{ marginRight: "5px" }}
          disabled={!shift}
        >
          Sonuç
        </button>
        <button onClick={handleReset} className="btn btn-danger">
          Sıfırla
        </button>
      </div>
      <div className="row mt-2">
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
    </>
  )
}

export default TimeCalc