import React from "react";

export const GoalProperties = props => {
  let data = JSON.parse(localStorage.getItem(props.id));

  let inputStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="goal-properties">
        <div
          className={
            data ? (data.price <= data.money ? "green-text" : null) : null
          }
          style={{ width: "100%", lineHeight: "1rem" }}
        >
          <h1>{data ? data.money + "/" + data.price + "$" : null}</h1>
          <h4>{data ? data.type : null}</h4>
          <h5>{data ? "Till: " + data.tillWhen : null}</h5>
        </div>
        <div style={{ width: "100%" }}>
          {data ? (
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
              }}
            >
              <div style={inputStyle}>
                <input
                  type="number"
                  name="addValue"
                  placeholder="Manage your goal"
                  value={props.addValue}
                  onChange={props.onChange}
                  className="form-control"
                />
                <div className="btn-wide btn-group" role="group">
                  <button
                    onClick={props.subMoney}
                    type="submit"
                    className="btn btn-danger"
                  >
                    Subtract
                  </button>
                  <button
                    onClick={props.addMoney}
                    type="submit"
                    className="btn btn-success"
                  >
                    Increment
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div>{data ? <hr className="my-3" /> : null}</div>
    </div>
  );
};

export default GoalProperties;
