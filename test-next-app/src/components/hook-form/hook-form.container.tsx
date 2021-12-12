import { FunctionComponent } from 'react';
import { HookForm as HookFormComponent } from './hook-form';
import { useForm } from 'react-hook-form';

export const HookForm: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = handleSubmit((data: any) => console.log(data));

  return (
    <HookFormComponent
      onSubmit={onSubmit}
      register={register}
      errors={errors}
    />
  );
};
