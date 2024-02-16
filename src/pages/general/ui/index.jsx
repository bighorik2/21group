import React from "react"
import  './style.css'
import { AddProductForm } from "widgets/product";

export const General = () => {
  return (
    <main className={`general`}>
      <h1 className="page-title">Форма отправки</h1>
      <AddProductForm/>
    </main>
  )
};
