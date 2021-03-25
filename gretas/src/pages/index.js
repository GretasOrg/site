import React from "react"
import Intro from "../components/index/Intro"
import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"

export default function Home() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Intro></Intro>
      </main>
      <Footer></Footer>
    </React.Fragment>
  )
}
