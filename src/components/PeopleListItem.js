import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');


  useEffect(() => {
  
    fetch(person.homeworld)
      .then(response => response.json())
      .then(home => { setHomeworld(home.name)
    })

  }, [person])

/*
  const fetchHomeUrl = () => {
     fetch(person.homeworld)
      .then(response => response.json())
      .then(home => { setHomeworld(home.name)
      console.log('fetched', home)
    })

*/

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld}</li>
    </ul>
  );
}

export default PeopleListItem;
