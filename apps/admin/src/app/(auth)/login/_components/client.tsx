'use client';

import { toast } from 'sonner';
import { LogInIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Button, LabelInput, Separator } from '@tainext/ui';
import { useSearchParams } from 'next/navigation';

const initialValue = {
  email: '',
  password: '',
};

export const Client = () => {
  const searchParams = useSearchParams();
  const redirectURL = searchParams.get('redirect');

  const [input, setInput] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target;
    setInput((prev) => ({ ...prev, [v.id]: v.value }));
  };

  const credentialsAction = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signIn('credentials', {
        ...input,
        redirect: true,
        redirectTo: redirectURL ?? '/',
      });
      toast.success('Login Successfully');
    } catch (error) {
      toast.error('Invalid Credentials');
      console.log('ERROR_LOGIN:', error);
    }
  };
  return (
    <form
      onSubmit={credentialsAction}
      className="max-w-md w-full p-8 rounded-lg bg-white border border-green-100 text-black text-sm flex flex-col gap-4 shadow-sm"
    >
      <div className="w-full flex flex-col">
        <h1 className="text-xl">Welcome Back</h1>
        <p className="text-gray-700">Log in to your account to continue</p>
      </div>
      <Separator className="bg-gray-400" />
      <div className="w-full flex flex-col gap-3">
        <LabelInput
          label={'Email'}
          placeholder={'e.g. example@mail.com'}
          id="email"
          type="email"
          value={input.email}
          onChange={handleChange}
        />
        <LabelInput
          label={'Password'}
          placeholder={'******'}
          id="password"
          isPassword
          value={input.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">
        <LogInIcon />
        Login
      </Button>
    </form>
  );
};
