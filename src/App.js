import { Component } from "react";
import "./App.css";
import DishCard from "./components/DishCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      possibleDishes: [
        {
          name: "pie",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F10%2F15%2Fketo-pumpkin-pie-dcms-large-2000.jpg",
        },
        {
          name: "stuffing",
          image:
            "https://www.howsweeteats.com/wp-content/uploads/2020/11/best-stuffing-12-500x500.jpg",
        },
        {
          name: "roast duck",
          image:
            "https://www.gastrosenses.com/wp-content/uploads/2020/11/Crispy-Whole-Roast-Duck.jpg",
        },
        {
          name: "ceviche",
          image:
            "https://www.muydelish.com/wp-content/uploads/2021/07/ceviche-de-camaron.jpg",
        },
        {
          name: "banana",
          image:
            "https://www.rastaimposta.com/DSN/rastaimpostacom/Commerce/ProductImages/lg1_000033.jpg",
        },
        {
          name: "baked mac n cheese",
          image:
            "https://www.recipetineats.com/wp-content/uploads/2020/11/Baked-Mac-and-Cheese-pull-shot.jpg",
        },
        {
          name: "lumpia",
          image:
            "https://assets.epicurious.com/photos/5fa46a30a56ece573cf73d0f/4:3/w_4416,h_3312,c_limit/Lumpia_HERO_RECIPE_110420_4613.jpg",
        },
        {
          name: "leche flan",
          image:
            "https://amiablefoods.com/wp-content/uploads/leche-flan-500-500x375.jpg",
        },
        {
          name: "creamed spinach",
          image:
            "https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Creamed-Spinach-25-500x500.jpg",
        },
        {
          name: "mashed potatoes",
          image:
            "https://images-gmi-pmc.edge-generalmills.com/1156f4ec-29c8-4cd9-80db-7d4ee330b1d0.jpg",
        },
      ],
    };
  }

  changeDish = () => {};

  addDish = () => {};

  handleReset = () => {};

  render() {
    return (
      <div className="App">
        <h1>8.2 Potluck Feast 🥧</h1>
        <div>
          <button>Change dish</button>
          <button>Add dish to table</button>
          <button>Clear table</button>
          <div>Currently selected dish:</div>
          <div>Number of dishes on table:</div>
        </div>
      </div>
    );
  }
}

export default App;
