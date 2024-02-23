import { createContext, useContext, ReactNode, useState } from 'react';

interface StateStringArrayProps {
    state: string[];
    setState: React.Dispatch<React.SetStateAction<string[]>>;
}

interface StateBooleanProps {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const StateNamesContext = createContext<StateStringArrayProps | undefined>(undefined);
const StateSavedContext = createContext<StateStringArrayProps | undefined>(undefined);
const StateBooleanContext = createContext<StateBooleanProps | undefined>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
    const [names, setNames] = useState<string[]>([]);
    const [saved, setSaved] = useState<string[]>([]);
    const [showChosen, setShowChosen] = useState(false)

    return (
        <StateNamesContext.Provider value={{ state: names, setState: setNames }}>
            <StateSavedContext.Provider value={{ state: saved, setState: setSaved }}>
                <StateBooleanContext.Provider value={{ state: showChosen, setState: setShowChosen }}>
                    {children}
                </StateBooleanContext.Provider>
            </StateSavedContext.Provider>
        </StateNamesContext.Provider>
    );
}

export function useNamesContext() {
    const context = useContext(StateNamesContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
}

export function useSavedContext() {
    const context = useContext(StateSavedContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
}

export function useChosenContext() {
    const context = useContext(StateBooleanContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
}
