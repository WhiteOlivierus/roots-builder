import * as React from "react";
import * as ReactDOM from "react-dom";

import Game from "./components/Game";
import gameData from "./game.json";

export default App;

const importAll = (resource) => resource.keys().map(resource);

importAll(require.context("./img", false, /\.(png|jpe?g|gif)$/));

ReactDOM.render(<Game game={gameData} />, document.getElementById("App"));
