const amiiboSearchUI = ({ term, setTermFunc, searchFunc, callbackFunc}) => {
    return <main>
      <button onClick={() => searchFunc(term, callbackFunc)}>Search</button>
      <label>
        Name:
        <input value={term} onChange={setTermFunc} />
      </label>
    </main>
}

export default amiiboSearchUI;