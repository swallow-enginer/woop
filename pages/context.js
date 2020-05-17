import React, {createContext} from 'react';

let Context = createContext();

function Provider(props){
    const value = {
        index:0,
        row: [ {
          title : "願望",
          description : "願望を書いてください",
          input: ""
        },
        {
          title : "メリット",
          description : "メリットを書いてください",
          input: ""
        }
        ]
      };

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
    }


    const Consumer = Context.Consumer;
    export {Provider, Consumer, Context}