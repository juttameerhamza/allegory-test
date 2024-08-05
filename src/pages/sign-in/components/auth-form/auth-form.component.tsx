import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowRightIcon,
  Button,
  Checkbox,
  Divider,
  ErrorToast,
  Form,
  FormControl,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
  Label,
  PhoneInput,
  Spinner
} from 'components';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useSignInUserMutation } from 'store/auth';
import { SignInFormData, signInFormSchema } from './auth-form.schema';

export function AuthForm() {
  const [signInUserMutation, { isLoading }] = useSignInUserMutation();

  const form = useForm<SignInFormData>({
    mode: 'onTouched',
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: ''
    }
  });

  const handleUserSignIn = ({ email }: SignInFormData) => {
    signInUserMutation({ email, password: 'asdf123' })
      .unwrap()
      .catch((error) => {
        toast.custom(
          (t) => (
            <ErrorToast
              title={error?.message || 'Something went wrong!'}
              description={error?.message && 'We cannot find an account with that email address. Make sure you enter your company email.'}
              onClick={() => toast.dismiss(t)}
            />
          ),
          { position: 'bottom-center' }
        );
      });
  };

  return (
    <Form {...form}>
      <form className='flex flex-col' onSubmit={form.handleSubmit(handleUserSignIn)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='full_name' required>
                Company Email Address
              </FormLabel>
              <FormControl>
                <FormInput id='full_name' placeholder='Type something...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Divider className='my-5'>or</Divider>

        <div className='flex flex-col gap-1'>
          <Label htmlFor='phone'>Mobile Phone Number</Label>
          <PhoneInput placeholder='Type something...' />
        </div>

        <div className='mt-6 flex items-center gap-1'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>

        <Button className='mt-6' disabled={isLoading}>
          {isLoading ? (
            <Spinner className='h-[22px] w-[22px] fill-neutral-0' />
          ) : (
            <>
              Sign In to the Dashboard <ArrowRightIcon size={16} className='ml-2 mt-[3px]' />{' '}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
