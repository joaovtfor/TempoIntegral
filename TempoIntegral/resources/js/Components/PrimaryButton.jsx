import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-10 py-2 bg-theme-blue-2 dark:bg-gray-200 border border-transparent rounded-3xl font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-theme-blue-lighter dark:hover:bg-theme-blue-lighter focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
