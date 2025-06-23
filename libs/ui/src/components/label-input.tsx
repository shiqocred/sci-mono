'use client';

import { ComponentProps, useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { cn, phoneNumberCode } from '@tainext/utils';
import { Button } from './ui/button';
import { Check, ChevronDown, Eye, EyeOff } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';

export const LabelInput = ({
  classContainer,
  label,
  isPassword = false,
  isPhone = false,
  id,
  ...props
}: ComponentProps<'input'> & {
  label: string;
  isPassword?: boolean;
  isPhone?: boolean;
  classContainer?: string;
}) => {
  return (
    <div className={cn('flex flex-col w-full gap-1.5', classContainer)}>
      <Label htmlFor={id}>{label}</Label>
      <CustomInput
        isPassword={isPassword}
        id={id}
        isPhone={isPhone}
        {...props}
      />
    </div>
  );
};

const CustomInput = ({
  isPassword,
  isPhone,
  ...props
}: ComponentProps<'input'> & { isPassword?: boolean; isPhone?: boolean }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [dialCode, setDialCode] = useState('+62');
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPhoneOpen) {
      // Delay sedikit agar scroll terjadi setelah DOM render
      const timeout = setTimeout(() => {
        selectedRef.current?.scrollIntoView({
          block: 'center',
          behavior: 'auto',
        });
      }, 0);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [isPhoneOpen]);

  if (isPassword) {
    return (
      <div className="relative w-full flex items-center">
        <Input
          className="focus-visible:ring-0 border-gray-400 focus-visible:border-gray-500 shadow-none"
          type={isVisible ? 'text' : 'password'}
          {...props}
        />

        <Button
          className="hover:bg-gray-300 size-7 absolute right-1 rounded"
          type="button"
          size={'icon'}
          variant={'ghost'}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <Eye /> : <EyeOff />}
        </Button>
      </div>
    );
  }
  if (isPhone) {
    return (
      <div className="w-full relative flex items-center rounded-md overflow-hidden">
        <Input
          className="focus-visible:ring-0 pl-20 border-gray-400 focus-visible:border-gray-500 shadow-none"
          {...props}
        />

        <div className="absolute left-2 flex items-center justify-center w-16">
          <Popover open={isPhoneOpen} onOpenChange={setIsPhoneOpen}>
            <PopoverTrigger asChild>
              <Button className=" h-auto w-fit !px-1 !py-0.5 rounded-full gap-1 text-xs shadow-none bg-gray-50 text-black hover:bg-gray-100">
                {dialCode}
                <ChevronDown className="size-3.5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Search dial phone..." />

                <CommandList className="p-0">
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup className="p-0 px-1">
                    {phoneNumberCode.map((item) => (
                      <CommandItem
                        key={item.code}
                        className="flex items-center gap-4 text-xs"
                        ref={item.dial_code === dialCode ? selectedRef : null}
                        onSelect={() => {
                          setDialCode(item.dial_code);
                          setIsPhoneOpen(false);
                        }}
                      >
                        <p className=" w-12">{item.dial_code}</p>
                        <div className="flex items-center gap-4 justify-between w-full">
                          <div className="flex items-center gap-2 w-full">
                            <p>{item.emoji}</p>
                            <p>{item.name}</p>
                          </div>
                          <Check
                            className={cn(
                              'size-4',
                              item.dial_code === dialCode ? 'flex' : 'hidden'
                            )}
                          />
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  }
  return (
    <Input
      className="focus-visible:ring-0 border-gray-400 focus-visible:border-gray-500 shadow-none"
      {...props}
    />
  );
};
