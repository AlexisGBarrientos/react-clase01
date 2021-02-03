import Item from "./Item";

const List = ({activities, deleteActivity}) => {
    return (
        <>
           {activities.length === 0 ? <h4>No Hay Tareas.</h4> : ""}
           {activities.map((item) => (
           <Item key={item.id} {...item} deleteActivity={deleteActivity}/> // siempre la key va al elemento padre // ...item le pasa todas las propiedades directamente al hijo
           ))} 
        </>
    );
}

/* Se deja el código de Item para entender el flujo:
const Item = ({id, work, state}) => { // se pasa a traves de las props "...item" todas las propiedades, por eso destructuro item
    return (
        <h4>
             {id} | {work} | { state ? "Realizado" : "Pendiente"}
        </h4>
    )
}*/

export default List;