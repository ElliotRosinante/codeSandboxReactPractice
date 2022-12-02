import React from "react";
import Counter from "./counter";
import { CounterConsumer } from "../counterContext";

//reset button has to be at the top of this component so that
// on clicking the reset button we convert all the counter values to zero
// this reset button will trigger

//countData is an object containing
function Counters() {
  return (
    <div>
      <CounterConsumer>
        {(countData) => {
          return (
            <div>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  countData.resetCount();
                }}
              >
                Reset
              </button>
              {countData.count.map((countObj) => (
                <Counter
                  key={countObj.id}
                  parentStateData={countData}
                  countObject={countObj}
                />
              ))}
            </div>
          );
        }}
      </CounterConsumer>
    </div>
  );
}
export default Counters;
