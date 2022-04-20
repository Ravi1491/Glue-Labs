import './App.css';
import Header from './Components/Header'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactDetails from './Components/ContactDetails';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts,setContacts] = useState(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  });

  const addContactHandler = contact => {
    setContacts([...contacts, {id: contacts.length, ...contact}]);
  }

  useEffect(() => {
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivedContacts){
      setContacts(retrivedContacts)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  const removeContact = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  }
 
  return (
    <div className="ui container">
      {/* <Router> */}
        <Header/>
        <Switch>
          <Route path="/" exact component={() => <ContactList contacts={contacts} getContactId={removeContact}/>}/>
          <Route path="/add" component={(props) => <AddContact {...props} addContactHandler={addContactHandler} /> } />
          <Route path="/contact/:id" component={ContactDetails}/>
        </Switch>
      {/* </Router> */}
    </div>
  );
}
export default App;
