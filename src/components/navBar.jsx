import React from "react";
import { CounterConsumer } from "../counterContext";

function NavBar() {
  return (
    <CounterConsumer>
      {(countData) => {
        return (
          <div>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <span className="navbar-brand" href="#">
                  Navbar
                </span>
                <span>
                  {/* this is where we display the length of the counters above 1 */}
                  {
                    countData.count.filter(function (countObj) {
                      return countObj.value > 1;
                    }).length
                  }
                </span>
              </div>
            </nav>
          </div>
        );
      }}
    </CounterConsumer>
  );
}

export default NavBar;
