import PropType from "prop-types";
import data from "../assets/ConsolesList.json";
import "../styles/ConsoleSumup.css";

function ConsoleSumup({ consoleSumup }) {
  const dataStringify = JSON.stringify(data);
  const toto = JSON.parse(dataStringify);
  const dataArray = Array.from(toto);

  const id = dataArray.findIndex((item) => item.Console === consoleSumup);
  const info = dataArray[id];

  return (
    <div>
      {info ? (
        <div key={info.Console}>
          <h2>{info.Console}</h2> <br />
          <p>{info.Descriptif}</p> <br />
          <p>Année de sortie : {info["Année de sortie"]}</p>
          <p>Fabriquant : {info.Fabriquant}</p>
          <p>Génération : {info.Generation}</p>
          <p>Bits : {info.Bits}</p>
          <p>Ventes en millions : {info["Ventes, en millions"]}</p>
          <p>Prix à la sortie : {info["Prix à la sortie, en USD"]}</p>
          <p>Titres phares : {info["Titres phares"]}</p>
        </div>
      ) : null}
    </div>
  );
}

ConsoleSumup.propTypes = {
  consoleSumup: PropType.string.isRequired,
};

export default ConsoleSumup;
