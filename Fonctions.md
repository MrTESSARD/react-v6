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

## e
# e.preventDefault()
En cliquant sur un bouton "Soumettre", l'empêcher de soumettre un formulaire donc la page ne pa réchargé 

# rénomer en uuiv4 package
import { v4 as uuiv4 } from "uuid";

# voir si la propriété existe .hasOwnProperty("imageLinks")
{
data.volumeInfo.hasOwnProperty("imageLinks")&&
<img src={data.volumeInfo.imageLinks.thumbnail&&data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title}/>
}

# Simplifications 
const bookToSave={title, author}//si les propriétées et les valeurs sont indentiques on peut simplifier title:title = title 

##########################
## ROUTER DOM V5->V6

# Redirection router V5
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
<Route exact path="/"  >
  <Redirect to="/docs" />
</Route>
<Route path="/docs" component={Docs} />

# Elements 
{/* Methode 1 */}
<Route path="/docs" component={Docs} />
{/* Méthode 2 */}
<Route path="/tutorial">
<Docs/>
</Route>
{/* Methode 3 */}
<Route path="/community" render={()=><Docs/> }/>

# NavLink injecte .active de CSS
# Link n'a pas de .active de CSS
# Avec REACT ROUTER V6 on peur gèrer la classe .active ce qu'on peut pas faire avec V5

## Navigate
Redirect remplacé par Navigate

# replace - route précédent est effancé dans l'historique 
# useNavigate
import { useNavigate } from 'react-router-dom'
  const navigate = useNavigate()
  onClick={()=>navigate("/tutorial")}
  # Naviguer vers le route précédént 
  onClick={()=>navigate(-1)}

  # remplace
  onClick={()=>navigate("/tutorial", {replace:true})}  -->  Supprime la navigation précédente donc l'url actuel
  onClick={()=>navigate(-1)}  --> revien en arrière 

  # Construction
const [underConst, setUnderConst] = useState({ Docs: false, Tutorials: true, Community: false });
<Route path="/tutorial"element={underConst.Tutorials?<Navigate to="/"/>  : <Tutorials/>} />

## Outlet
# Router
<Route path="/nav" element={<Nav/>}>     
<Route path="installation" element={<Installation/>}/>
<Route path="fondamentaux" element={<Fondamentaux/>}/>
<Route path="hooks" element={<Hooks/>}/>
</Route>

# Dans Nav 
<nav className="nav">
  <Link className="nav-link " aria-current="page" to="installation">Installation</Link>
  <Link className="nav-link" to="fondamentaux">Fondamentaux</Link>
  <Link className="nav-link" to="hooks">Hooks</Link>
</nav>
<Outlet/>

## Récupérer la data dans l'URL
V5 //props.match.params
# V6
<Route path="/users/:profileId" element={<Profile/>}/>

import { useParams } from 'react-router-dom'
const params=  useParams()//Objet
console.log(params.profileId)

# *** Nombre quelconque
        <Route path="/users/:profileId" element={<Profile/>}/>
# *** lien "exacte" /users/noteUsers
        <Route path="/users/noteUsers" element={<NotUsers/>}/>
## useSearchParams() Le useSearchParamshook est utilisé pour lire et modifier la chaîne de requête dans l'URL de l'emplacement actuel. 
import {  useSearchParams } from 'react-router-dom'
# voir les methodes de la  fonction 
console.log(searchParam)

## Ruby sass compass
# Ruby
https://rubyinstaller.org/downloads/  --Langage de programmation
ruby --version

# sass
https://sass-lang.com/documentation/
gem install sass  --Langage de programmation

# compass
gem install compass  --Framework

# écouter et générer css
sass --watch sass:css

## scss
.btn{
    background: rgb(186, 3, 125);
    &:hover{ // pour coller :
        background: #e30e0e;
    }
    .theme-vert & {// pour .btn qui se trouve dans .theme-vert
        background: #0ee35c;
    }
}

# repetition du texte 
background: {color: #000;repeat: no-repeat;} => background-color: #000;background-repeat: no-repeat;

# @extend
La règle de Sass @extend résout ce problème. C'est écrit @extend <selector>, et cela dit à Sass qu'un sélecteur doit hériter des styles d'un autre
.call-to-action{
    @extend .btn;
}
# %btn
pour créer des regles et peut être utilisé grace à @extend sinion jamais apparait dand css 

# variables
$variable: 20   $

# Unitées
padding: $variable + 10em => 30em

# utiliser les fichiers des variables 
dans libs => responsive.scss => 
$medium-up: "only screen and (min-width: 768px)"
dans style.scss => 
@import "libs/responsive.scss";  // on importe toutes les varibles
pour utiliser la variable => #{$medium-up}
@media #{$medium-up} {
    .btn{
        width: 100%;
    }
   }

# !default
$medium:768px!default; indique qu'il est utilisé uniquement si cette variable ne pas declaré précédément $

## Fonctions 
# darken
background: darken($primary, 20); //assombrire de 20%
# lighten
background: darken($primary, 20); //éclaircir de 20%

# rgba($primary, 0.5)  //ajoute la pransparence

## Mixins 
# Les mixins vous permettent de définir des styles qui peuvent être réutilisés dans votre feuille de style. Ils permettent d'éviter facilement d'utiliser des classes non sémantiques comme .float-left, et de distribuer des collections de styles dans des bibliothèques.
https://sass-lang.com/documentation/at-rules/mixin
Dans fichier mixins.scss =>
@mixin rotate($rotation:10deg){
    -ms-transform: rotate($rotation);
    -webkit-transform: rotate($rotation);
    transform: rotate($rotation);
}
dans style.scss =>
.card{
  @include rotate(60deg)
}

## gitignore
How to remove node_modules from Git?
To remove the node_modules folder from Git, follow those simple steps:

1. Create a .gitignore file with this entry.
node_modules

2. Remove the node_modules folder from the Git index using the git rm cached command.
git rm -r --cached node_modules

3. Commit the changes.
git commit -am "removed node_modules folder"

4. Push the changes to the remote.
git push origin master


## TWIG
# message|length // permet de connaitre la taille dans twig
