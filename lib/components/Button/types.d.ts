/// <reference types="react" />
import CSS from 'csstype';
export declare type BarColor = string;
export declare type ButtonColor = string;
export declare type ButtonWidth = number;
export declare type IsActive = boolean;
export declare type ButtonProps = {
    /**
     * Color of the bars, default 'black'
     */
    barColor?: BarColor;
    /**
     * Component to use as the box
     */
    Box?: React.ElementType;
    /**
     * Color of the button, default 'transparent'
     */
    buttonColor?: ButtonColor;
    /**
     * Custom styles to inject
     */
    buttonStyle?: CSS.Properties;
    /**
     * Width of the button, default 40
     */
    buttonWidth?: ButtonWidth;
    /**
     * ClassName for the button
     */
    className?: string;
    /**
     * Specifies if the button is active or not, default false
     */
    isActive?: IsActive;
    /**
     * Component to use as the bar lines
     */
    Lines?: React.ElementType;
    /**
     * Callback to invoke on button click to toggle active state, default () => {}
     */
    toggleButton?: () => void;
};
