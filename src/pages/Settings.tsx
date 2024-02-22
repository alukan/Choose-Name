import React, { useState } from 'react';
import { Button, TopIconWrapper, CenterContainer } from '../styles/RegularStyles';
import { Label, Select } from '../styles/SettingsStyles';
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';

const Settings: React.FC = () => {

    const navigate = useNavigate();
    const [gender, setGender] = useState<string>('neutral');
    const [popular, setPopular] = useState<boolean>(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('gender', gender);
        localStorage.setItem('popular', popular ? 'true' : 'false');
        navigate('/');
    };

    return (
        <CenterContainer>
            <TopIconWrapper onClick={() => { navigate('/') }}>
                <IoMdHome size="24px" />
            </TopIconWrapper>
            <h2>Name Selection Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label>
                        Select a gender:
                        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="boy">Boy</option>
                            <option value="girl">Girl</option>
                            <option value="neutral">Neutral</option>
                        </Select>
                    </Label>
                </div>
                <div>
                    <Label>
                        Should the name be popular?
                        <Select onChange={(e) => setPopular(e.target.value === 'yes')}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Select>
                    </Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </CenterContainer>
    );
};

export default Settings;
