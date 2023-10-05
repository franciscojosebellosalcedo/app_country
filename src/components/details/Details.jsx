import { useContextApp } from "../../contextApp/ProviderContextApp";
import "./Details.css";

const Details = () => {
  const { countrySeleted, setCountrySeleted } = useContextApp();

  const setLanguagesCountry = (list) => {
    let languages = "";
    list.map((la, index) => {
      if (index === list.length - 1) {
        languages += la.name;
      } else {
        languages += la.name + ",";
      }
    });
    return languages;
  }
  return (
    <section className="container__details">
      <div className="details">
        <button className="details__back" onClick={()=>setCountrySeleted(null)}>
          <i class="uil uil-arrow-left icon__back"></i>
          Back
        </button>
        <div className="details__data">
          <img className="details__imagen" src={countrySeleted.flag} alt="imagen details" />
          <div className="details__info">
            <h1 className="details__name">{countrySeleted.name}</h1>
            <article className="details__info__text">
              <div className="details__info__left">
                <p >Native name:<span>{countrySeleted.nativeName}</span></p>
                <p >Population: <span>{countrySeleted.population}</span></p>
                <p >Region: <span>{countrySeleted.region}</span></p>
                <p >Sub Region: <span>{countrySeleted.subregion}</span></p>
                <p >Capital: <span>{countrySeleted.capital}</span></p>
              </div>
              <div className="details__info__rigth">
                {countrySeleted.topLevelDomain !== undefined && countrySeleted.topLevelDomain !== null  ?<p >Top Level Domain:<span>{countrySeleted?.topLevelDomain[0]}</span></p>:""}
                {countrySeleted?.currencies !==undefined && countrySeleted.topLevelDomain !== null ?<p >Currencies: <span>{countrySeleted?.currencies[0].code}</span></p>:""}
                <p >Languages: <span>{setLanguagesCountry(countrySeleted.languages)}</span></p>
              </div>
            </article>
            {
              countrySeleted?.borders?.length > 0 ?
                <div className="details__data__borders">
                  <h2 className="borders__title">Border Countries:</h2>
                  <div className="borders">
                    {countrySeleted.borders.map((bo) => (
                      <div key={bo} className="details__border">{bo}</div>
                    ))}
                  </div>
                </div>
                : ""
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details;