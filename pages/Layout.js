export const woop = React.createContext();

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

export default function Layout() {
  return (
    <div className="App">
    <AppBar></AppBar>
    <woop.Provider  value={value}>
      <div className="container">
          {children}
      </div>
    </woop.Provider>
  </div>
  )
}
