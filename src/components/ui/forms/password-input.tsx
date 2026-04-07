import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import type { InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import { Eye } from '@/components/icons/eye-icon';
import { EyeOff } from '@/components/icons/eye-off-icon';
import Link from '@/components/ui/link';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label: string;
  name: string;
  forgotPageLink?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline';
  error: string | undefined;
  forgotPageRouteOnClick?: () => void;
}

const variantClasses = {
  normal:
    'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
  outline: 'border border-border-base focus:border-accent',
};

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      label,
      name,
      error,
      children,
      variant = 'normal',
      shadow = false,
      type = 'text',
      forgotPageLink = '',
      forgotPageRouteOnClick,
      ...rest
    },
    ref
  ) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    return (
      <div className={className}>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor={name} className="text-body font-semibold text-sm">
            {label}
          </label>

          {forgotPageLink && (
            <Link
              href={forgotPageLink}
              className="text-accent focus:text-accent-700 hover:text-accent-hover text-xs transition-colors duration-200 focus:outline-none focus:font-semibold"
            >
              {t('common:text-forgot-password')}
            </Link>
          )}
          {forgotPageRouteOnClick && (
            <button
              onClick={forgotPageRouteOnClick}
              type="button"
              className="text-accent focus:text-accent-700 hover:text-accent-hover text-xs transition-colors duration-200 focus:outline-none focus:font-semibold"
            >
              {t('common:text-forgot-password')}
            </button>
          )}
        </div>
        <div className="relative">
          <input
            id={name}
            name={name}
            type={show ? 'text' : 'password'}
            ref={ref}
            className={cn(
              'py-3 ltr:pl-4 rtl:pr-4 ltr:pr-11 rtl:pl-11 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
              shadow && 'focus:shadow',
              variantClasses[variant],
              inputClassName
            )}
            autoComplete="on"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            {...rest}
          />
          <label
            htmlFor={name}
            className="text-body absolute ltr:right-4 rtl:left-4 top-5 -mt-2 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <EyeOff className="w-6 h-6" />
            ) : (
              <Eye className="w-6 h-6" />
            )}
          </label>
        </div>
        {error && <p className="my-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
