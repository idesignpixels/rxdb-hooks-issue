import { useRxData } from 'rxdb-hooks';
import logo from './logo.svg';
import './App.css';

function App() {
  const { result: characters, isFetching } = useRxData(
    // the collection to be queried
    'characters',
    // a function returning the query to be applied
    collection =>
      collection.find({
        selector: {
          affiliation: 'jedi',
        },
      })
  );

  if (isFetching) {
    return 'loading characters...';
  }

  return (
    <div className="App">
        <ul>
        {characters.map((character, idx) => (
          <li key={idx}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
