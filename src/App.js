import React from "react";
import "./styles.css";
import { useState } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import { CounterProvider } from "./counterContext";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [count, setCount] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);
  //we will define methods that we will call from within the
  //child components that change the state

  //increment method
  //dedrement method
  //reset method
  return (
    <div className="App">
      <CounterProvider
        value={{
          count,
          incrementCount: (ObjectOfCounterWhichCalled) => {
            const counters = [...count];
            const index = counters.indexOf(ObjectOfCounterWhichCalled);
            counters[index] = { ...ObjectOfCounterWhichCalled };
            counters[index].value++;
            setCount(counters);
          },
          decrementCount: (ObjectOfCounterWhichCalled) => {
            const counters = [...count];
            const index = counters.indexOf(ObjectOfCounterWhichCalled);
            counters[index] = { ...ObjectOfCounterWhichCalled };
            counters[index].value--;
            setCount(counters);
          },
          resetCount: () => {
            const altered = count.map((counterObj) => {
              counterObj.value = 0;
              return counterObj;
            });
            setCount(altered);
          },
          deleteCount: (childObjectToDelete) => {
            const counters = [...count];
            const countersUponDeleting = counters.filter((countObj) => {
              return countObj.id !== childObjectToDelete.id;
            });
            setCount(countersUponDeleting);
          }
        }}
      >
        <NavBar />
        <Counters />
      </CounterProvider>
    </div>
  );
}
