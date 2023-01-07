##
console.dir(document) //voir les propriétés du documents #title par exemple
 document.title=`Title: ${text}`

## identifierPrefix
# useId supports an identifierPrefix to prevent collisions in multi-root apps. To configure, see the options for hydrateRoot and ReactDOMServer.

 const root = ReactDOM.createRoot(document.getElementById('root'), {
  identifierPrefix: 'totoGeek-'
});

## console
console.table(dataArray)//afficher en tableau

## e.preventDefault()
# blocker le refraichicement de la page 
