import React from 'react'

const App = () => {
  const fam = [
    {id: "relativeListItem2", name: 'Lee'},
    {id: "relativeListItem1", name: 'Jack'},
    {id: "relativeListItem3", name: 'Sparrow'}
  ];

  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol>
        {fam.map((ele) => <li key={ele.id}>{ele.name}</li>)}
      </ol>
    </div>
  )
}

export default App
