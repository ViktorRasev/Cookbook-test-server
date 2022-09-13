import React from "react";
import "./App.css";
import RecipeList from "./bricks/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";

const recipeList = [
  {
    name: "Ovesné placičky",
    description:
      "Cibuli oloupejte a nastrouhejte nahrubo. Mrkev důkladně umyjte a nastrouhejte najemno spolu s česnekem. V míse smíchejte vločky, cibuli, mrkev, česnek a koření. Přidejte strouhanku a důkladně promíchejte, ideálně rukou tak, aby vznikla jednotná směs. Pokud je směs příliš suchá, přidejte trošku vody, pokud je příliš mokrá, přidejte trošku strouhanky. Na pánvi rozpalte olej, ze směsi vytvarujte malé placičky a smažte z obou stran dozlatova.",
    imgUri:
      "https://zachranjidlo.cz/wp-content/uploads/dsc-0516-1-1024x480-1200x500-c-default.jpg",
    ingredients: [
      {
        id: "f9996cfda5568262",
        amount: 2,
        unit: "hrnky",
      },
      {
        id: "518aea069b179f29",
        amount: 2,
        unit: "ks",
      },
      {
        id: "01ed1245cdfd005a",
        amount: 2,
        unit: "ks",
      },
      {
        id: "157003980c0a437a",
        amount: 4,
        unit: "lžíce",
      },
      {
        id: "2220a6eb35e31dc6",
        amount: 2,
        unit: "ks",
      },
      {
        id: "0b9ccac3b2f733cc",
        amount: 1,
        unit: "lžička",
      },
      {
        id: "dfa4b721efe898a5",
        amount: 1,
        unit: "lžička",
      },
      {
        id: "97f5d8e88343e612",
        amount: 1,
        unit: "lžička",
      },
      {
        id: "3f702872fb8e99f8",
        amount: 1,
        unit: "lžička",
      },
      {
        id: "cd99517791018390",
        amount: 0.25,
        unit: "lžičky",
      },
      {
        id: "40d227ce8a379758",
        amount: 100,
        unit: "ml",
      },
    ],
    id: "854f2f3cb8954916",
  },
  {
    name: "Barbecue burger ze zbylého kuřete",
    description:
      "Rozehřejte troubu na 240 °C. Obrané drůbeží maso natrhejte na vlákna, zamíchejte s barbecue omáčkou a rozprostřete do pekáčku. Dejte do trouby a pečte asi 10 minut. Rozpůlené bulky opečte na rozpálené pánvi na sucho z obou stran. Limetu umyjte, nastrouhejte kůru, šťávu vymačkejte a obojí smíchejte s majonézou. Pomocí škrabky udělejte z mrkve tenké proužky. Přendejte je do misky, přidejte špetku soli a pepře a pár kapek limety a promíchejte. Začněte skládat burger. Obě půlky bulek pomažte limetovou majonézou. Na spodní polovinu bulky navrstvěte natrhaný koriandr, na plátky nasekanou chilli papričku, mrkvové proužky, tenká kolečka šalotky a plátek rajčete. Nakonec přidejte vrstvu zapečeného bbq kuřete a plátek cheddaru. Přiklopte vrchní polovinou bulky a podávejte.",
    imgUri:
      "https://zachranjidlo.cz/wp-content/uploads/bbq-kure-burger-1024x493-1200x500-c-default.png",
    ingredients: [
      {
        id: "9bb6644a5520cf8e",
        amount: 400,
        unit: "g",
      },
      {
        id: "a6e8d310c6628d31",
        amount: 4,
        unit: "ks",
      },
      {
        id: "f6d6a4104a5194d9",
        amount: 100,
        unit: "g",
      },
      {
        id: "87dbea8746ecb15d",
        amount: 1,
        unit: "ks",
      },
      {
        id: "59a3f03b35e69690",
        amount: 3,
        unit: "snítka",
      },
      {
        id: "f34bba8dd7088dff",
        amount: 80,
        unit: "ml",
      },
      {
        id: "01ed1245cdfd005a",
        amount: 1,
        unit: "ks",
      },
      {
        id: "b08135ccef590fd6",
        amount: 1,
        unit: "ks",
      },
      {
        id: "9c0957e5273de89a",
        amount: 1,
        unit: "ks",
      },
      {
        id: "cfb695a5d686cb2e",
        amount: 2,
        unit: "ks",
      },
      {
        id: "5cfea498406de1b7",
        amount: 2,
        unit: "lžíce",
      },
    ],
    id: "1ae20af4cfa8efc4",
  },
];

function App() {
  return (
    <div className="App">
      <RecipeList recipeList={recipeList} />
    </div>
  );
}

export default App;
