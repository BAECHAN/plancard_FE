import { UserInfo } from '@/entities/user';
import UserFormInput from '@/entities/user/ui/UserFormInput';
import { useUpdateUserMutation } from '@/features/user';
import { modalUserInfoDataAtom } from '@/shared/store/atom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

const UserEditForm: React.FC<{
  onSave: () => void;
}> = ({ onSave }) => {
  const userInfo = useRecoilValue(modalUserInfoDataAtom);

  const { mutate: updateUserMutate } = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<UserInfo>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<UserInfo> = async data => {
    console.log(data);
    if (!data || !userInfo) {
      return false;
    }

    updateUserMutate({ ...data, id: userInfo.id });
    onSave();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col"
    >
      <div className="mb-4">
        <UserFormInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
            value: userInfo?.email,
          })}
          isDirty={!!dirtyFields.email}
          isError={!!(dirtyFields.email && errors.email)}
        />
        {errors.email && dirtyFields.email && (
          <small
            className="text-red-500 mt-1"
            role="alertdialog"
          >
            {errors.email.message}
          </small>
        )}
      </div>

      <div className="mb-4">
        <UserFormInput
          id="name"
          label="Name"
          type="text"
          placeholder="Enter your name"
          {...register('name', {
            required: 'Name is required',
            pattern: {
              value: /^[a-zA-Z가-힣\s]+$/,
              message: 'Invalid Name',
            },
            value: userInfo?.name,
          })}
          isDirty={!!dirtyFields.name}
          isError={!!(dirtyFields.name && errors.name)}
        />
        {errors.name && dirtyFields.name && (
          <small
            className="text-red-500 mt-1"
            role="alertdialog"
          >
            {errors.name.message}
          </small>
        )}
      </div>

      <div className="mb-4">
        <UserFormInput
          id="age"
          label="Age"
          type="number"
          placeholder="Enter your age"
          {...register('age', {
            required: 'Age is required',
            value: userInfo?.age,
            validate: value => {
              if (value < 0 || value > 150) {
                return 'Age must be between 0 and 150';
              }
            },
            valueAsNumber: true,
          })}
          isDirty={!!dirtyFields.age}
          isError={!!(dirtyFields.age && errors.age)}
        />
        {errors.age && dirtyFields.age && (
          <small
            className="text-red-500 mt-1"
            role="alertdialog"
          >
            {errors.age.message}
          </small>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 flex-1"
        disabled={
          isSubmitting || errors.email || errors.age || errors.name
            ? true
            : false
        }
      >
        Submit
      </button>
    </form>
  );
};

export default UserEditForm;
