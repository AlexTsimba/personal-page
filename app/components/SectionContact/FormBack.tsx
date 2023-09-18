import { useContactFormStore } from '@/store/store';
import { shallow } from 'zustand/shallow';

export default function FormBack() {
  const { setIsFlipped, isSucces, isPending } = useContactFormStore(
    (state) => ({
      setIsFlipped: state.setIsFlipped,
      isSucces: state.isSuccess,
      isPending: state.isPending,
    }),
    shallow
  );

  console.log(isPending);
  return (
    <div className="h-full w-full rounded-lg  bg-white dark:bg-accent1-foreground">
      <button type="button" onClick={() => setIsFlipped(false)}>
        {isSucces ? 'Send one more' : 'Try again'}
      </button>
    </div>
  );
}
