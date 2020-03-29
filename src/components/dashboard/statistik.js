import React, { Component, useState, useEffect, useReducer } from "react";
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import CardPrimary from '../card/CardPrimary';

const initialState = {
    positif: 0,
    sembuh: 0,
    meninggal: 0
  };
  
  const reducer = (state, action) => {
    return {
      ...state,
      positif: action.positif,
      sembuh: action.sembuh,
      meninggal: action.meninggal
    }
  }

const Statistik = () =>{

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.kawalcorona.com/indonesia";
    const dataIndonesia = () => {
        fetch(proxyurl + url)
        .then(response => response.json())
        .then(jsonResponse => {
          dispatch({
            positif: jsonResponse[0]["positif"],
            sembuh: jsonResponse[0]["sembuh"],
            meninggal: jsonResponse[0]["meninggal"],
          })
        });
      }
  
      useEffect(() => {
        dataIndonesia()
      }, []); 
  
      const { positif, sembuh, meninggal } = state;

    return (
        <div className="App-body">
        <div className="row">
          <ReactBootstrapStyle />
          <CardPrimary bg="danger" title="Positif" value={positif} emoticonType="1" subtitle="Orang"></CardPrimary>
          <CardPrimary bg="info" title="Sembuh" value={sembuh} emoticonType="2" subtitle="Orang"></CardPrimary>
          <CardPrimary bg="dark" title="Meninggal" value={meninggal} emoticonType="3" subtitle="Orang"></CardPrimary>
        </div>
        </div>
    )
}

export default Statistik;