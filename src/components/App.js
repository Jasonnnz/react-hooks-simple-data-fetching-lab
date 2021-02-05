import { useEffect, useState } from 'react';

function App() {
    const [ dog, setDog ] = useState(null);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(dog => {
            setDog(dog.message)
        })
    },[])

    return(
        <div>
            { dog ? <img src={dog} alt="A Random Dog"></img> : <p>Loading...</p>}
        </div>
    );
}

export default App;