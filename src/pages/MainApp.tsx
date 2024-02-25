import Card from '../components/Card';
import { Button, TopIconWrapper, CenterContainer } from '../styles/RegularStyles';
import { ListContainer, ListItem } from '../styles/ListStyles';
import { useNamesContext, useSavedContext, useChosenContext } from '../StateContext';
import { handleSave, handleDelete, handleMB } from '../utilits/handlers';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { getNamesData } from '../utilits/api';

function App() {
  const navigate = useNavigate();

  const { state: names, setState: setNames } = useNamesContext();
  const { state: saved, setState: setSaved } = useSavedContext();
  const { state: showChosen, setState: setShowChosen } = useChosenContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gender = localStorage.getItem('gender');
    const popular = localStorage.getItem('popular');
    if (!gender || !popular) {
      navigate('/settings');
    }
  }, [navigate]);

  useEffect(() => {
    getNamesData(setNames, { CallbackAfter: () => { setLoading(false) } });
    // eslint-disable-next-line
  }, []);

  const restart = () => {
    getNamesData(setNames, { CallbackBefore: () => { setLoading(true) }, CallbackAfter: () => { setLoading(false) } });
    setSaved([])
  }

  return (
    <div className="App">
      <TopIconWrapper onClick={() => { navigate('/settings') }}>
        <IoMdSettings size="24px" />
      </TopIconWrapper>
      <CenterContainer>
        <h1>Choose new name</h1>
        {!loading ? (names.length > 0 && !showChosen ? (
          <Card
            name={names[0]}
            onSave={handleSave}
            onMB={handleMB}
            onDel={handleDelete}
          />
        ) : (
          <>
            {saved.length > 0 ?
              (<>
                <h3> Your list</h3>
                <ListContainer>
                  {saved.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </ListContainer>
              </>) :
              <h3> You didn&apos;t like any names</h3>
            }
          </>
        )) : (
          <h3>Loading...</h3>
        )}
        {
          names.length > 0 ?
            (<Button onClick={() => setShowChosen(!showChosen)}>
              {!showChosen ? ("show chosen names") : ("hide chosen names")}</Button>) :
            (<Button onClick={() => restart()}>
              Restart
            </Button>)
        }
      </CenterContainer>
    </div>
  );
}

export default App;
