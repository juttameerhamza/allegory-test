import * as React from 'react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { cn } from 'utils';
import { Button } from '../button/button.component';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../command/command.component';
import { ArrowDownIcon } from '../icon/arrow-down';
import { Input, InputProps } from '../input/input.component';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover.component';
import { ScrollArea } from '../scroll-area/scroll-area.component';

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> &
  Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
    onChange?: (value: RPNInput.Value) => void;
  };

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
};

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
  React.ElementRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, onChange, ...props }, ref) => {
  return (
    <RPNInput.default
      ref={ref}
      className={cn('flex', className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      /**
       * Handles the onChange event.
       *
       * react-phone-number-input might trigger the onChange event as undefined
       * when a valid phone number is not entered. To prevent this,
       * the value is coerced to an empty string.
       *
       * @param {E164Number | undefined} value - The entered value
       */
      onChange={(value) => onChange?.(value || ('' as RPNInput.Value))}
      {...props}
    />
  );
});
PhoneInput.displayName = 'PhoneInput';

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => {
  const handleSelect = React.useCallback(
    (country: RPNInput.Country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type='button'
          variant={'outline'}
          className={cn('relative flex items-center gap-1 rounded-e-none rounded-s-lg px-3 py-[10px] pr-[32px]')}
          disabled={disabled}
        >
          <FlagComponent country={value} countryName={value} />
          <ArrowDownIcon
            size={12}
            className={cn('absolute right-1 top-1/2 h-4 w-4 -translate-y-1 opacity-50', disabled ? 'hidden' : 'opacity-100')}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[300px] p-0'>
        <Command>
          <CommandList>
            <ScrollArea className='h-72'>
              <CommandInput placeholder='Search country...' />
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {options
                  .filter((x) => x.value)
                  .map((option) => (
                    <CommandItem className='cursor-pointer gap-2' key={option.value} onSelect={() => handleSelect(option.value)}>
                      <FlagComponent country={option.value} countryName={option.label} />
                      <span className='flex-1 text-sm'>{option.label}</span>
                      {option.value && (
                        <span className='text-foreground/50 text-sm'>{`+${RPNInput.getCountryCallingCode(option.value)}`}</span>
                      )}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <Input className={cn('rounded-e-lg rounded-s-none', className)} {...props} ref={ref} />
));
InputComponent.displayName = 'InputComponent';

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className='flex h-[18px] w-[18px] items-center justify-center overflow-hidden rounded-full bg-neutral-1 [&>svg]:scale-150'>
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

FlagComponent.displayName = 'FlagComponent';

export { PhoneInput };
