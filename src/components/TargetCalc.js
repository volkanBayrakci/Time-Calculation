import { useState } from "react"


const TargetCalc = () => {
  const [employee, setEmployee] = useState();
  const [target, setTarget] = useState();
  const [resultThree, setResultThree] = useState();
  const [resultFour, setResultFour] = useState();


  const handleClick = () => {
    const employeeVariable = employee
    const targetVariable = target
    const combining = targetVariable / 60 / employeeVariable / 7.25
    const calculation = combining * 435
    setResultThree(combining)
    setResultFour(calculation.toFixed(0))
  }

  const handleReset = (e) => {
    e.preventDefault()
    setEmployee("")
    setTarget("")
  }

  return (
    <>
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
            onKeyUp={handleClick}

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
            onKeyUp={handleClick}

          />
        </div>
      </form>
      <div className="mt-2">
        {/* <button
          className="btn btn-success"
          onClick={handleClick}
          style={{ marginRight: "5px" }}
          disabled={!employee || !target}
        >
          Sonuç
        </button> */}
        <button onClick={handleReset} className="btn btn-danger" >
          Sıfırla
        </button>
      </div>
      <div className="row my-2">
        <div className="col-md-6 col-sm-6 col-6">
          <label className="w-100" >
            Dakika Hedefi:
            <input type="number" value={resultThree} className="form-control"  />
          </label>
        </div>
        <div className="col-md-6 col-sm-6 col-6">
          <label className="w-100">
            Gün Sonu Hedefi:
            <input type="number" value={resultFour} className="form-control"   />
          </label>
        </div>
      </div>
    </>
  )
}

export default TargetCalc