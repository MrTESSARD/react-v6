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

##
# identique que
createUserWithEmailAndPassword(auth, email, password)
            .then(authUser => { //cas où on a reusi l'inscription
                return user(authUser.user.uid).set({
                    pseudo:pseudo,//identique que pseudo
                    email:email
                })

            })
# identique que
createUserWithEmailAndPassword(auth, email, password)
            .then(authUser => { //cas où on a reusi l'inscription
                return user(authUser.user.uid).set({
                    pseudo,//identique que pseudo
                    email
                })

            })
## React.memo
export default React.memo(ProgressBar) //evite le rechargement inutilement 

Pour utiliser un autre nom de fichier à la place de index.js(par exemple - Loader.js) il faut mettre un fichier nomé "package.json" et dedans mettre {"main": "Loader.js"}

## Local Stockage
localStorage.setItem('marvelStorageDate', Date.now() - enregistrer
localStorage.getItem('marvelStorageDate') - lire

## création d'un STORE
# voir les fonction du store 
const store = Redux.createStore(reducer)
console.log(store)

# acces vers le store
store.getState()//permet acces vers le store

# Listener
subscribe se lance à chaque modification du state( dans store )
store.subscribe(()=>{
    console.log("Mon nouveau store", store.getState() )

})

# Combine reducers
const rootReducer = Redux.combineReducers({
    phone: PhonesReducer,
    tv: TvsReducer
})

//création store
const store = Redux.createStore(rootReducer)

# configure store
import { configureStore, combineReducers } from '@reduxjs/toolkit'
export const store = configureStore({

  // reducer: phoneReducer,
  reducer: {
          phone: phoneReducer,
          television: tvReducer,
          comments: CommentReducer
        }})

## redux-thunk
npm install redux-thunk

# applyMiddleware
sachant que createStore est depressié et il faut utiliser configureStore et lui prend qu'in seul parametre il faut utiliser
composeWithDevTools => npm i @redux-devtools/extension

export const store = configureStore({
  reducer: {
          phone: phoneReducer,
          television: tvReducer,
          comments: CommentReducer
        }},
initialState,
composeWithDevTools(applyMiddleware(...middleware))
  )

# usedispatch vs connect
difficile à comprendre 
connect peut etre plus performant et plus facile à tester
https://www.samdawson.dev/article/react-redux-use-selector-vs-connect