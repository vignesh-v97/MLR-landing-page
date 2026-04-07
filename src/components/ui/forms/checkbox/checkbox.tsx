import classNames from 'classnames';
import type { InputHTMLAttributes } from 'react';
import React from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  error?: string;
  theme?: 'primary' | 'secondary';
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, name, error, theme = 'primary', ...rest }, ref) => {
    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            ref={ref}
            className="checkbox"
            {...rest}
          />

          <label
            htmlFor={name}
            className={classNames('text-body text-sm ml-2 font-openSans', {
              'text-primary': theme === 'primary',
              'text-secondary': theme === 'secondary',
            })}
          >
            {label}
          </label>
        </div>

        {error && (
          <p className="my-2 text-xs text-red-500 ltr:text-right rtl:text-left">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
