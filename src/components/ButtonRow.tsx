import React, { ReactElement } from 'react';
import { ButtonProps } from './Button';
import styles from '@/styles/modules/buttons.module.css';

interface ButtonRowProps {
    children: ReactElement<ButtonProps>[];
	className?: string;
}

const ButtonRow: React.FC<ButtonRowProps> = ({ children, className }) => {
    return (
        <div className={[styles.buttonRow,className].join(" ")}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement<ButtonProps>(child)) {
                    return child;
                } else {
                    console.error("ButtonRow only accepts Button components as children.");
                    return null;
                }
            })}
        </div>
    );
};

export default ButtonRow;