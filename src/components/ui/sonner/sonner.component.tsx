import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-neutral-[#1F2228] group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-neutral-[#1F2228]',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          error: 'bg-[#FDEDF0] border border-[#F8C9D2] !text-neutral-[#1F2228]'
        }
      }}
      {...props}
    />
  );
};

export { Toaster };
