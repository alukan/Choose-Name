

const handleSave = async (setNames: React.Dispatch<React.SetStateAction<string[]>>, names: string[],
    setSaved: React.Dispatch<React.SetStateAction<string[]>>, saved: string[], name: string) => {
    
    await handleDelete(setNames, names);
    setSaved([...saved, name]);
};

const handleDelete = async (setNames: React.Dispatch<React.SetStateAction<string[]>>, names: string[]) => {

    console.log("start");
    if (names.length > 0) {
        const newNames = [...names];
        newNames.shift();
        setNames(newNames);
    }
};

const handleMB = async (setNames: React.Dispatch<React.SetStateAction<string[]>>, names: string[], name: string) => {
    
    if (names.length > 1) {
        await handleDelete(setNames, names);
        setNames(prevState => [...prevState, name]);
    } else {
        alert("Now you need to answer yes or no");
    }
};

export { handleSave, handleDelete, handleMB };
