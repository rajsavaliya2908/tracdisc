import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import zxcvbn from 'zxcvbn';


const PasswordStrengthMeterBar = ({
    password,
    radius = 4,
    height = 8,
    showStrenghtText = true,
    unfilledColor = '#F0F0F0',
}) => {
    const [result, setResult] = useState(0);
    const [testedResult, setTestedResult] = useState(0);
    const [color, setColor] = useState('#F25F5C');
    const [label, setLabel] = useState('');
    const [firstMount, setFirstMount] = useState(0);

    const calculaterPercentage = (value) => {
        switch (value) {
            case 0:
                return 0;
            case 1:
                return 0.25;
            case 2:
                return 0.5;
            case 3:
                return 0.75;
            case 4:
                return 1;
            default:
                return 0;
        }
    };

    const calculateBarColor = (value) => {
        switch (value) {
            case 0:
                return '#F04016';
            case 1:
                return '#F04016';
            case 2:
                return '#F0A516';
            case 3:
                return '#40D824';
            case 4:
                return '#00931E';
            default:
                return '#F25F5C';
        }
    };

    const calculateLabel = (value) => {
        switch (value) {
            case 0:
                return 'Weak password!';
            case 1:
                return 'Weak password!';
            case 2:
                return 'Fair password!';
            case 3:
                return 'Fair password!';
            case 4:
                return 'Strong password!';
            default:
                return 'Weak password!';
        }
    };

    useEffect(() => {
        setTestedResult(zxcvbn(password).score);
        setResult(calculaterPercentage(testedResult));
        setLabel(calculateLabel(testedResult));
        setColor(calculateBarColor(testedResult));
        setFirstMount(firstMount + 1);

        return () => {
            setFirstMount(0);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password]);

    return (
        <View style={{ marginTop: 5 }}>
            {testedResult > 0 || firstMount > 1 ? (
                <>
                    <ProgressBar
                        progress={result}
                        width={null}
                        height={height}
                        color={color}
                        unfilledColor={unfilledColor}
                        borderColor="transparent"
                        borderRadius={radius}
                    />
                    {showStrenghtText && <Text style={{ color }}>{label}</Text>}
                </>
            ) : (
                <View />
            )}
        </View>
    );
};

export default PasswordStrengthMeterBar;
