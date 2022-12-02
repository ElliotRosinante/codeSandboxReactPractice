import React from 'react'

const counterContext = React.createContext()
const CounterProvider = counterContext.Provider
const CounterConsumer = counterContext.Consumer

export {CounterProvider, CounterConsumer}