import { useContextApp } from "../../contextApp/ProviderContextApp";
import ItemCountry from "../item/ItemCountry";
import "./Grid.css";

const Grid = () => {

  const {countries,listFilter}=useContextApp();
  return (
    <section className="container__grid">
      <div className="grid__countries">
        {
          listFilter.length > 0 ?
           <>
          {
            listFilter.map((country)=>(
              <ItemCountry country={country}/>
            ))
          }
        </> 
        :
          <>
            {
              countries.map((country)=>(
                <ItemCountry country={country}/>
              ))
            }
          </>
        }
      </div>
    </section>
  )
}

export default Grid;