import { useState } from 'react';
import './App.css';
import contactsJSON from './contacts.json';

const firstFive = contactsJSON.slice(0,5);
const remainingContacts = contactsJSON.slice(5);



function App() {
  const [contacts, setContacts] = useState(firstFive)
  const [moreContacts, setMoreContacts] = useState(remainingContacts)
  return (
    <div className="App">
      <table>
        <thead>IronhackContacts
          <tr>
            <th>
              <h3>Picture</h3>
            </th>
            <th>
              <h3>
                Name
              </h3>
            </th>
            <th>
              <h3>
                Popularity
              </h3>
            </th>
            <th>
              <h3>
                Won Oscar
              </h3>
            </th>
            <th>
              <h3>
                Won Emmy
              </h3>
            </th>
          </tr>
        </thead>
        <tbody>
          { contacts.map((oneCeleb) => { 
              return (
                <tr key={oneCeleb.id}>
                  <td><img style={{ height:"100px" }} src={oneCeleb.pictureUrl} alt="celeb pic"/></td>
                  <td>{oneCeleb.name}</td>
                  <td>{oneCeleb.popularity.toFixed(2)}</td>
                  <td>{oneCeleb.wonOscar === true ? `🏆` : ``}</td>
                  <td>{oneCeleb.wonEmmy === true ? `🏆` : ``}</td>
                </tr>

              )
            }) 
            }

          { moreContacts.map((randomCeleb, i) => { 
            if (i === Math.floor(Math.random() * (moreContacts.length - 1))) {
              return (
                <tr key={randomCeleb.id}>
                  <td><img style={{ height:"100px" }} src={randomCeleb.pictureUrl} alt="celeb pic"/></td>
                  <td>{randomCeleb.name}</td>
                  <td>{randomCeleb.popularity.toFixed(2)}</td>
                  <td>{randomCeleb.wonOscar === true ? `🏆` : ``}</td>
                  <td>{randomCeleb.wonEmmy === true ? `🏆` : ``}</td>
                </tr>

              ) }
            }) 
            }
           
          

        </tbody>
      </table>
    </div>
  );
};

export default App;
