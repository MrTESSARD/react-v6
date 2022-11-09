
import Profile from './components/Profile';
import React from "react"
import { MyContext, ColorContext } from "./components/MyContext"

import './App.css';

class App extends React.Component {
  state = {
    user: {
      name: "lisa",
      age: 8
    }
  }

  render() {

    return (
      <div>
        <MyContext.Provider value={this.state.user}>
          <ColorContext.Provider value={"red"}>
            {/* //on peut enleer si on fais  */}

            <Profile info={this.state.user} />
          </ColorContext.Provider>
        </MyContext.Provider>


      </div>


    );
  }
}


export default App;
