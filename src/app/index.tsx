import { StatusBar } from "react-native";

import { Home } from "../components/Home";

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent
      />
      <Home />
    </>
  )
}