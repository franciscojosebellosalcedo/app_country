import { useState } from "react";
import Grid from "../grid/Grid";
import "./Main.css"
import { useContextApp } from "../../contextApp/ProviderContextApp";
import Details from "../details/Details";

const Main = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const { countries, setListFilter, countrySeleted } = useContextApp();
  const [valueSelect, setValueSelect] = useState("None");

  const searchCountry = (e) => {
    const regex = /[a-zA-Z]/;
    if (regex.test(e.target.value)) {
      const search = countries.filter((co) => co.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
      setListFilter([...search]);
    }else{
      setListFilter([]);

    }
  }
  const handlerSelect = (e) => {
    const value = e.target.textContent;
    setValueSelect(value);
    if (value === "None") {
      setListFilter([]);
    } else {
      setOpenSelect(false);
      const filter = countries.filter((co) => co.region.toLowerCase().trim() === value.toLowerCase().trim());
      setListFilter([...filter]);
    }
  }

  return (
    <section className="container">
      {
        countrySeleted !== null 
          ? <Details/>
          :
          <>
            <form className="form__inputs">

              <div className="form__input__search">
                <i class="uil uil-search icon__search"></i>
                <input onInput={(e) => searchCountry(e)} className="input__search" placeholder="Search for a country..." />
              </div>

              <div className="form__input__filter" onClick={() => setOpenSelect(!openSelect)}>
                <div className="input__filter" >
                  <span className="input__filter__leyend">{valueSelect === "None" ? "Filter by Region" : valueSelect}</span>
                  <i class="uil uil-angle-down"></i>
                </div>
                <ul className={`list__values__filter ${openSelect !== false ? 'see__select' : ''}`}>
                  <li onClick={(e) => handlerSelect(e)} className="value__filter">Africa</li>
                  <li onClick={(e) => handlerSelect(e)} className="value__filter">Americas</li>
                  <li onClick={(e) => handlerSelect(e)} className="value__filter">Asia</li>
                  <li onClick={(e) => handlerSelect(e)} className="value__filter">Europe</li>
                  <li onClick={(e) => handlerSelect(e)} className="value__filter">Oceania</li>
                  <li onClick={(e) => handlerSelect(e)} className="value__filter">None</li>
                </ul>
              </div>

            </form>
            <Grid />
          </>
      }

    </section>
  )
}

export default Main;