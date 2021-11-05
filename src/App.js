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
        {
          name: "pernil",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pernil.1.jpg/1200px-Pernil.1.jpg",
        },
        {
          name: "collard greens",
          image:
            "https://i0.wp.com/thissillygirlskitchen.com/wp-content/uploads/2019/07/Southern-Collard-Greens-from-thissillygirlskitchen.com-2-2.jpg",
        },
        {
          name: "green bean casserole",
          image:
            "https://hips.hearstapps.com/delish/assets/17/38/1505763623-green-bean-casserole-148-1.jpg",
        },
        {
          name: "rice and beans",
          image:
            "https://www.mystayathomeadventures.com/wp-content/uploads/2018/04/Instant-Pot-Arroz-Con-Habichuelas-2F-Puerto-Rican-Rice-and-beans-720x540.png",
        },
        {
          name: "stuffing",
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/turkey-stuffing-1631546051.jpg?crop=0.898xw:0.599xh;0.0425xw,0.345xh&resize=640:*",
        },
        {
          name: "sweet potato casserole",
          image:
            "https://hips.hearstapps.com/hmg-prod/images/delish-sweet-potato-casserole-marshmallows-horizontal-1530552310.jpg",
        },
      ],
      dishIndex: 0,
      dishesOnTable: [],
    };
  }

  changeDish = () => {
    const { possibleDishes } = this.state;

    this.setState({
      dishIndex: Math.floor(Math.random() * possibleDishes.length),
    });
  };

  addDish = () => {
    const { dishesOnTable, possibleDishes, dishIndex } = this.state;
    const currentDish = possibleDishes[dishIndex];
    this.setState({
      dishesOnTable: [...dishesOnTable, currentDish],
    });
  };

  handleReset = () => {
    this.setState({
      dishesOnTable: [],
    });
  };

  render() {
    const { possibleDishes, dishIndex, dishesOnTable } = this.state;
    const currentDish = possibleDishes[dishIndex];
    console.log({ dishesOnTable });

    let dishesToDisplay = dishesOnTable.map((dish, i) => {
      return <DishCard key={i} dish={dish} handleReset={this.handleReset} />;
    });

    return (
      <div className="App">
        <h1>8.2 Potluck Feast 🥧</h1>
        <div>
          <button onClick={this.changeDish}>Change dish</button>
          <button onClick={this.addDish}>Add dish to table</button>
          <button onClick={this.handleReset}>Clear table</button>
          <div>Currently selected dish: {currentDish.name}</div>
          <div>Number of dishes on table: {dishesOnTable.length}</div>
          <div className="dish-grid">{dishesToDisplay}</div>
        </div>
      </div>
    );
  }
}

export default App;
