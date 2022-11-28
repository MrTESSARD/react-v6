18 -  BrowserRouter, Route, Switch, Nav, NavLink, Strict et Exact

{/* react-router-dom@5 */}
 <Route exact path="/" component={Docs}/> 
  {/* exact pour respecter exactement le slash  *uniquement  */}

 <Route strict path="/community/" component={Community}/>     
 {/* strict pour respecter les dux slash  */}

 import {Link, NavLink} from 'react-router-dom';//react-router-dom@5
//link sert à ne pas refraichir la page 

<Switch> - permet d'ouvrir la premiere page qu'il trouve et si ne trouve pas affiche  <Route  component={ErrorPage}/>  

19 - Les Redirections (redirections automatiques avec retard)
 setTimeout(() => {
      
        props.history.push("/")
    }, 5000);

20 - 1/2. React Contexte (context.Provider - Context.Consumer)

21 - 2/2
{/* <MyContext.Provider value={this.state.user}> */}//on peut enleer si on fais 
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

22 - Hook d’état – useState – Partie 1
Hook d’état – useState – Partie 2

pour ne pas refraichir la page
 const handleTodo = (e)=>{
    e.preventDefault()

23 - Hook d’effet – useEffect après Render
24 - Hook d’effet – useEffect avec Condition
useEffect(()=>{
    
  },[count] )
25 - Hook d’effet – useEffect comme ComponentDidMount
useEffect(()=>{
    
  },[] )//si array vide s'execute une fois au demarege
26 - Hook d’effet – useEffect avec Nettoyage
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

## useMemo Renvoie use aleur mémorisée
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