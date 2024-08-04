import signInSideImage from 'assets/images/signin-side-image.jpeg';
import { ArrowRightIcon, Button, Checkbox, Divider, Input, Label, PhoneInput } from 'components';
import { useSignInUserMutation } from 'store/auth';

export function AuthStep() {
  const [signInUserMutation] = useSignInUserMutation();

  const handleUserSignIn = () => {
    signInUserMutation({ password: 'asdf123', email: 'onur1@gmail.com' })
      .unwrap()
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  return (
    <div className='grid grid-cols-2 justify-between p-6 pt-0'>
      <div className='flex flex-col gap-6 rounded-[20px] border border-neutral-1 p-[50px] shadow-2'>
        <form className='flex flex-col' onSubmit={(e) => e.preventDefault()}>
          <div className='flex flex-col gap-1'>
            <Label htmlFor='email'>Company Email Address</Label>
            <Input type='email' placeholder='Type something...' />
          </div>

          <Divider className='my-5'>or</Divider>

          <div className='flex flex-col gap-1'>
            <Label htmlFor='phone'>Mobile Phone Number</Label>
            <PhoneInput placeholder='Type something...' />
          </div>

          <div className='mt-6 flex items-center gap-1'>
            <Checkbox />
            <Label htmlFor='remember'>Remember me</Label>
          </div>

          <Button className='mt-6' onClick={handleUserSignIn}>
            Sign In to the Dashboard <ArrowRightIcon size={16} className='ml-2 mt-[3px]' />{' '}
          </Button>
        </form>

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
