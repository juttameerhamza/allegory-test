import signInSideImage from 'assets/images/signin-side-image.jpeg';
import { Button, Divider } from 'components';
import { AuthForm } from '../auth-form/auth-form.component';

export function AuthStep() {
  return (
    <div className='grid grid-cols-2 justify-between p-6 pt-0'>
      <div className='flex flex-col gap-6 rounded-[20px] border border-neutral-1 p-[50px] shadow-2'>
        <AuthForm />

        <p className='text-xs font-normal text-neutral-6'>
          By continuing, you agree to the Allegory Master Services Agreement or other agreement with your organization, and the Privacy
          Notice. This site uses essential cookies. See our Cookie Notice for more information.
        </p>

        <Divider variant='light' size='xs'>
          New to Allegory?
        </Divider>

        <Button variant='link' size='link'>
          Create a New Allegory Account
        </Button>
      </div>

      <div className='ml-auto w-[400px] max-w-[400px] rounded-[20px] border border-neutral-1 p-2'>
        <div
          style={{ '--bg-image': `url(${signInSideImage})` } as { [key: string]: string }}
          className='h-full w-full rounded-[20px] bg-gradient-img bg-cover bg-center'
        />
      </div>
    </div>
  );
}
