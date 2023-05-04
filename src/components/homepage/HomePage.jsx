import scss from "./HomePage.module.scss";
import Header from "../header/Header";
import Card from "../cards/Card";
import data from "../../xmltojson.json";
import { useState } from "react";

function HomePage() {
  const newData = data["search-results"].entry;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filteredData = newData.filter((item) => {
    return item.creator.toLowerCase().includes(value.toLowerCase());
  });


  return (
    <div className={scss.HomePage}>
      <Header data={newData} />
      <div className={scss.filterText}>
        <input
          type="text"
          placeholder="Enter Creator Name"
          onChange={handleChange}
        />
      </div>
      <div className={scss.cards}>
        {filteredData.map((item) => (
          <Card
            key={item.eid}
            creator={item.creator}
            title={item.title}
            university={item.affiliation.affilname}
            city={item.affiliation["affiliation-city"]}
            country={item.affiliation["affiliation-country"]}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
