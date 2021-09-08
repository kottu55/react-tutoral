import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { Menu } from "./Menu";
import { LANGUAGES } from "./const/languages";
function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    console.log(lang);
  }
  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab === 'list' ? <List /> : <Form onAddLang={addLang} />
      }
      <Menu />
    </div>
  );
}

export default App;
