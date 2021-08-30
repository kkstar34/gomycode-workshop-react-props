

export const Home = ({title, age, ville,onChangeCity, children}) => {
    // const title = props.title;
    // const age = props.age;


    



    return (
        <div>

        
        <h2>Le titre de mon composant est :{title}</h2>
        <h3>L'age est : {age}</h3>
        <h4>La ville est : {ville}</h4>
        <p>Le innerHTML est : {children}</p>

        <button onClick={onChangeCity}>Alert</button>
        </div>
    )
}