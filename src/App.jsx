import React, { useState, useEffect, useMemo } from "react";
import './App.css'
import { loadXHR } from "./ajax";
import { readFromLocalStorage, writeToLocalStorage } from "./storage";
import Footer from "./footer";
import Header from "./header";
import Results from "./results";
import Search from "./AmiiboSearchUI";

// call searchAmiibo() with "mario" and our callback function
const baseurl = "https://www.amiiboapi.com/api/amiibo/?name=";

const searchAmiibo = (name, callback) => {
  console.log(`Searching for ${name}...`)
  loadXHR(`${baseurl}${name}`, callback);
};

const App = () => {

  // app "globals" and utils
  const savedTerm = useMemo(() => readFromLocalStorage("term") || "", []);
  const [term, setTerm] = useState(savedTerm);
  const [results, setResults] = useState([]); // [amiibo, amiibo, amiibo

  useEffect(() => {
    writeToLocalStorage("term", term);
  }, [term]);

  const parseAmiiboResult = xhr => {
    // get the `.responseText` string

    const responseText = xhr.responseText;

    // declare a json variable
    let json;

    // try to parse the string into a json object
    json = JSON.parse(responseText);

    // log out number of results (length of `json.amiibo`)
    console.log(`Number of results=${json.amiibo.length}`);

    setResults(json.amiibo);

    // loop through `json.amiibo` and log out the character name
    for (const amiibo of json.amiibo) {
      /* console.log(amiibo.character); */
    }
  };

  const handleInputChange = (input) => {
    setTerm(input.target.value);
    setResults([]);

    console.log(term);
  };

  return <>
    <Header
      title="Amiibo Finder"
      />
    
    <hr />
    <Search
      term={term}
      setTermFunc={handleInputChange}
      searchFunc={searchAmiibo}
      callbackFunc={parseAmiiboResult}
    />
    <Results results={results} />
    <hr />
    <Footer
      name="Ace Coder"
      year={new Date().getFullYear()}
    />
  </>;
};

export default App;