import { FunctionComponent, FormEvent } from 'react';
import { HookForm as HookFormComponent } from './hook-form';
import { useForm } from 'react-hook-form';

export const HookForm: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };
  return (
    <HookFormComponent
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};
