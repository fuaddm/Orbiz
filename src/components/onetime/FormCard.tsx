'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logoPic from '~/public/images/home/card_logo.webp';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const CardSchema = z.object({
  email: z.string().email(),
  cardDetails: z.string().regex(/^\d{4} \d{4} \d{4} \d{4}$/, {
    message: 'Enter card number as: 0000 0000 0000 0000.',
  }),
  country: z
    .string()
    .min(2, {
      message: 'Country is required. Minimum 2 characters.',
    })
    .max(100, {
      message: 'Country name too long. Max 100 characters.',
    }),
});

type CardSchemaType = z.infer<typeof CardSchema>;

const FormCard = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CardSchemaType>({ resolver: zodResolver(CardSchema), mode: 'onBlur' });

  const onSubmit = handleSubmit((data) => console.log(data));

  const [cardNumber, setCardNumber] = useState('');

  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters and reformat
    const cleaned = value.replace(/\D+/g, '');
    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    return formatted;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCardNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedCardNumber); // Update local state with formatted number
  };

  const handleCardNumberBlur = () => {
    setValue('cardDetails', cardNumber, { shouldValidate: true }); // Update form value and validate
  };

  return (
    <form
      onSubmit={onSubmit}
      className="h-fit w-[25em] rounded-[1em] border-[0.0625em] border-solid border-solid-100 bg-white px-[1.5em] pb-[1.5em] pt-[2em]">
      <div className="mb-[1.125em] flex flex-col items-center gap-[0.75em]">
        <div className="h-[3.25em] w-[3.25em]">
          <Image
            src={logoPic}
            alt=""
          />
        </div>
        <div className="text-[1em] font-semibold text-solid-900">Uxercon Icon Set</div>
      </div>
      <div className="mb-[1.25em] h-[0.125em] w-full bg-solid-50"></div>
      <div className="mb-[1.25em] flex flex-col gap-[0.75em]">
        <div className="flex flex-col gap-[0.375em]">
          <label
            htmlFor="formCardEmail"
            className="text-[0.875em] font-semibold text-solid-900">
            Email address
          </label>
          <input
            id="formCardEmail"
            type="text"
            placeholder="johndoe@mail.com"
            className="font-regular w-full rounded-[0.5em] border-[0.0625em] border-solid border-solid-100 bg-white px-[0.75em] py-[0.5em] text-[1em] text-solid-900 shadow-[0px_0.0625em_0.1875em_0px_rgba(13,13,18,0.05),0px_0.0625em_0.125em_0px_rgba(13,13,18,0.04)] placeholder:text-solid-400"
            {...register('email')}
          />
          {errors.email && <p className="text-[0.875em] text-red-100">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-[0.375em]">
          <label
            htmlFor="formCardCardDetails"
            className="text-[0.875em] font-semibold text-solid-900">
            Card details
          </label>
          <input
            id="formCardCardDetails"
            type="text"
            placeholder="Card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            onBlur={handleCardNumberBlur} // Validate on blur
            maxLength={19}
            className="font-regular w-full rounded-[0.5em] border-[0.0625em] border-solid border-solid-100 bg-white px-[0.75em] py-[0.5em] text-[1em] text-solid-900 shadow-[0px_0.0625em_0.1875em_0px_rgba(13,13,18,0.05),0px_0.0625em_0.125em_0px_rgba(13,13,18,0.04)] placeholder:text-solid-400"
          />
          {errors.cardDetails && <p className="text-[0.875em] text-red-100">{errors.cardDetails.message}</p>}
        </div>
        <div className="flex flex-col gap-[0.375em]">
          <label
            htmlFor="formCardCountry"
            className="text-[0.875em] font-semibold text-solid-900">
            Country of region
          </label>
          <input
            id="formCardCountry"
            type="text"
            placeholder="United states"
            className="font-regular w-full rounded-[0.5em] border-[0.0625em] border-solid border-solid-100 bg-white px-[0.75em] py-[0.5em] text-[1em] text-solid-900 shadow-[0px_0.0625em_0.1875em_0px_rgba(13,13,18,0.05),0px_0.0625em_0.125em_0px_rgba(13,13,18,0.04)] placeholder:text-solid-400"
            {...register('country')}
          />
          {errors.country && <p className="text-[0.875em] text-red-100">{errors.country.message}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-[0.5em] bg-primary-100 px-[1.5em] py-[0.75em] text-center text-[0.875em] font-semibold text-white active:bg-primary-200">
        Pay $98.99
      </button>
    </form>
  );
};

export default FormCard;
