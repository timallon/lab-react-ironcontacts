import { useState } from 'react';
import './App.css';
import contactsJSON from './contacts.json';

const firstFive = contactsJSON.slice(0,5)

function App() {
  const [contacts, setContacts] = useState(firstFive)
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
          </tr>
        </thead>
        <tbody>
          { contacts.map((oneCeleb) => { 
              return (
                <tr>
                  <td><img style={{ height:"100px" }} src={oneCeleb.pictureUrl} alt="celeb pic"/></td>
                  <td>{oneCeleb.name}</td>
                  <td>{oneCeleb.popularity.toFixed(2)}</td>
                </tr>

              )
            }) 
            }
           
          

        </tbody>
      </table>
    </div>
  );
};

export default App;
