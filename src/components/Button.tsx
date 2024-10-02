import React from "react";
import styles from "@/styles/modules/buttons.module.css";

export interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
	style?: React.CSSProperties;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, style, className }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={[styles.button, className].join(" ")} style={style}>
            {label}
        </button>
    );
};

export default Button;
