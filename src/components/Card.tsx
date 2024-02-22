import { useNamesContext, useSavedContext, useChosenContext } from '../StateContext';
import { ButtonContainer, CardContainer, Title } from '../styles/CardStyles';
import { Button } from '../styles/RegularStyles';
interface CardProps {
    name: string;
    onSave:  (setNames: React.Dispatch<React.SetStateAction<string[]>>, names: string[],
        setSaved: React.Dispatch<React.SetStateAction<string[]>>, saved: string[], name: string)
         => void
    onMB: (setNames: React.Dispatch<React.SetStateAction<string[]>>, names: string[], name: string) => void
    onDel:  (setNames: React.Dispatch<React.SetStateAction<string[]>>, names: string[]) => void
}


function Card({ name, onSave, onMB, onDel }: CardProps) {
    const { state: names, setState: setNames } = useNamesContext();
    const { state: saved, setState: setSaved } = useSavedContext();
    return (
        <CardContainer>
            <Title>{name}</Title>
            <ButtonContainer>
                <Button onClick={() => onSave(setNames, names, setSaved, saved, name)}>Yes</Button>
                <Button onClick={() => onMB(setNames, names, name)}>Maybe</Button>
                <Button onClick={() => onDel(setNames, names)}>NO</Button>
            </ButtonContainer>
        </CardContainer>
    );
}

export default Card;