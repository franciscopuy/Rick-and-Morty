import Card from '../card/Card';

 


export default function Cards({characters, onClose}) {
     return (

      <div >
         {characters.map(({id, name, status, species, gender, origin, image}) => (
            <Card 
               key={id}
               id={id}
               name={name}
               image={image}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               onClose={onClose}
               
               />
               ))}
      </div>
   );
}
