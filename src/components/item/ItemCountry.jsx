import { useContextApp } from "../../contextApp/ProviderContextApp";
import "./ItemCountry.css";
const ItemCountry = (props) => {
  const {setCountrySeleted}=useContextApp();

  return (
    <div key={props.country.name} className="country" onClick={()=>setCountrySeleted(props.country)}>
      <img className="country__image" src={props.country.flag} alt="image country" />
      <div className="country__data">
        <h3 className="country__name">{props.country.name}</h3>
        <p className="country__population">Population:<span>{props.country.population}</span></p>
        <p className="country__region">Region: <span>{props.country.region}</span></p>
        <p className="country__capital">Capital: <span>{props.country.capital}</span></p>
      </div>
    </div>
  )
}

export default ItemCountry