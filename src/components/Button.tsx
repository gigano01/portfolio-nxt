import React from "react";
import styles from "@/styles/modules/buttons.module.css";

export interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={styles.button}>
            {label}
        </button>
    );
};

export default Button;
