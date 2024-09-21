function Exponent({ num, exponent }) {
  const resultado = num ** exponent;
  // const stringExponente = (num.toString() + " ").repeat(exponent).trim().split(" ").join(" * ")

  
  const numToString = num.toString() + " * ";
  const stringRepetido = numToString.repeat(exponent).slice(0, - 3);
  
  // const newaaa= stringRepetido.length
  
  console.log(stringRepetido);
  
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {stringRepetido} = <span className="total">{resultado}</span>
      </p>
    </div>
  );
}

export default Exponent;
