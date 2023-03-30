##  18 -  BrowserRouter, Route, Switch, Nav, NavLink, Strict et Exact

{/* react-router-dom@5 */}
 <Route exact path="/" component={Docs}/> 
  {/* exact pour respecter exactement le slash  *uniquement  */}

 <Route strict path="/community/" component={Community}/>     
 {/* strict pour respecter les dux slash  */}

 import {Link, NavLink} from 'react-router-dom';//react-router-dom@5
//link sert à ne pas refraichir la page 

<Switch> - permet d'ouvrir la premiere page qu'il trouve et si ne trouve pas affiche  <Route  component={ErrorPage}/>  

##  19 - Les Redirections (redirections automatiques avec retard)
 setTimeout(() => {
      
        props.history.push("/")
    }, 5000);

##  20 - 1/2. React Contexte (context.Provider - Context.Consumer)

##  21 - 2/2
{/* <MyContext.Provider value={this.state.user}> */}//on peut enlever si on fais 
import React from "react"
const user={
    name:"bart",
    age:9
}
const MyContext=React.createContext(user)
export {MyContext}

----

<MyContext.Consumer> pour une fonction

pour import sans {toto} il faut faire export default toto sinon juste export toto=import {toto} from
context.type
create.context

##  22 - Hook d’état – useState – Partie 1
Hook d’état – useState – Partie 2

pour ne pas refraichir la page
 const handleTodo = (e)=>{
    e.preventDefault()

##  23 - Hook d’effet – useEffect après Render
##  24 - Hook d’effet – useEffect avec Condition
useEffect(()=>{
    
  },[count] )
##  25 - Hook d’effet – useEffect comme ComponentDidMount
useEffect(()=>{
    
  },[] )//si array vide s'execute une fois au demarege
##  26 - Hook d’effet – useEffect avec Nettoyage
s'effectue à l'aide de  return()=>{//méthode de demontage egale à componentWillUnmount() 

## evenement touche bouton : 
    handelKeyCode= e=>{
        console.log(e)
        this.setState({
            keyCode:e.code
        })
    }
## var myTitle = document // pour connaitre les action de document 
console.dir(myTitle)

    componentDidMount() { 
        document.addEventListener("keyup",this.handelKeyCode )

     }

##  27 - Hook de Contexte – useContext
# const value = useContext(MyContext);
https://fr.reactjs.org/docs/hooks-reference.html#usecontext

##  28 - useReducer – Partie 1/2
##  29 - useReducer – Partie 3
##  30 -  useCallback – Partie 1
##  31 -  useCallback – Partie 2 // memorisation de la fonction pour eviter le rechargement inutile //(pour une classe c'est pureComponent)
##  32 - useMemo

recapitulatif - 
## useCallback Renvoie une fonction de rappel mémorisée
const incrementCountTwo=useCallback((val)=>{
  console.log("Je suis dans incrementCountTwo")
  countTwo.value < 100 && setCountTwo({...countTwo, value:countTwo.value + val})
}, [countTwo])

## useMemo Renvoie use valeur mémorisée
const memorizedValue = useMemo(()=>{
  console.log(  "je suis dans isOverTen"  )   
   return count>10
}, [count])


## 33 - useImperativeHandle permet d'exposer la personalisation d'enfant jusq'au parent'
personnalise l’instance qui est exposée au composant parent lors de l’utilisation de ref. Comme toujours, il vaut mieux s’abstenir d’utiliser du code impératif manipulant des refs dans la plupart des cas. useImperativeHandle est conçu pour être utilisé en conjonction avec forwardRef :

## 34 - useLayoutEffect

useEffect s'execute après le charfement de la page 
useLayoutEffect n'attend pas le chargement de la page

## Element.getBoundingClientRect()
La méthode Element.getBoundingClientRect() retourne un objet DOMRect fournissant des informations sur la taille d'un élément et sa position relative par rapport à la zone d'affichage.
## boxRef.current.offsetheight similaire

## 35 Custom Hooks   -- Construire vos propres Hooks
## 36 Custom Hooks  final -- Construire vos propres Hooks

## 37 useDebugValue(value) 
 Vous pouvez utiliser useDebugValue pour afficher une étiquette pour les Hooks personnalisés dans les outils de développement React (React DevTools, NdT).

//Array
useDebugValue("bonjour")
useDebugValue(isLoading)
useDebugValue(data)
useDebugValue(fetchUrl)
useDebugValue(JSON.stringify(data))

//Cette fonction est appelée uniquement si les Hooks sont inspectés. Elle reçoit la valeur de débogage comme argument et devrait renvoyer la valeur formatée.
useDebugValue(data,  val => JSON.stringify(val))

Vérification : 
    useDebugValue(data,  val => {
        alert("useDebugValue")
       return JSON.stringify(val)
    })

## 38 Custom Hook useFetch avec Async/Await

## 39  useTransition()
## 40  useDeferredValue()
# useTransition() en action
useTransition()peut être utilisé pour indiquer à React que certaines mises à jour d'état ont une priorité inférieure (c'est-à-dire que toutes les autres mises à jour d'état ou déclencheurs de rendu d'interface utilisateur ont une priorité plus élevée).

Lors de l'appel useTransition(), vous récupérez un tableau avec exactement deux éléments : une isPendingvaleur booléenne, vous indiquant si la mise à jour d'état de faible priorité est toujours en attente, et une startTransition()fonction qui peut être enroulée autour d'une mise à jour d'état pour indiquer à React qu'il s'agit d'une valeur faible. -mise à jour prioritaire.


La setFilterTerm()fonction de mise à jour d'état est enveloppée par startTransition()et donc React traite ce code de mise à jour d'état avec une priorité inférieure. Dans la démo, cela signifie que le champ de saisie reste réactif et réagit instantanément aux frappes. Sans l'utilisation de useTransition()l'application, l'application peut ne pas répondre, en particulier sur les appareils plus lents.

# useDeferredValue() en action
useTransition()vous donne un contrôle total puisque vous décidez quel code doit être encapsulé et traité comme "basse priorité". Parfois cependant, vous pourriez ne pas avoir accès au code de mise à jour de l'état réel (par exemple, parce qu'il est effectué par une bibliothèque tierce). Ou, pour une raison quelconque, vous ne pouvez pas utiliser useTransition().

Dans de tels cas, vous pouvez utiliser à la useDeferredValue()place.

Avec useDeferredValue(), vous n'enveloppez pas le code de mise à jour de l'état, mais plutôt la valeur qui est finalement générée ou modifiée en raison de la mise à jour de l'état (soit la valeur de l'état elle-même, soit une valeur calculée en fonction de la valeur de l'état

## 41 useId (React >=18)
useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.

# useId supports an identifierPrefix to prevent collisions in multi-root apps. To configure, see the options for hydrateRoot and ReactDOMServer.

## 42 React.lazy & React.Suspense 
# Le découpage dynamique de code
Pour éviter de vous retrouver avec un bundle trop volumineux, il est bon d’anticiper les problèmes et de commencer à fractionner votre bundle
# React.lazy 
La fonction React.lazy vous permet d’afficher un composant importé dynamiquement comme n’importe quel autre composant.
# React.Suspense 
Le composant importé dynamiquement devrait être exploité dans un composant Suspense, qui nous permet d’afficher un contenu de repli (ex. un indicateur de chargement) en attendant que ce module soit chargé.