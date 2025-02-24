
import clsx from 'clsx';

export default function Landing() {
  return (
    <main
      className={clsx(
        'h-screen w-full p-6',
        'flex flex-col items-center justify-center gap-6',
      )}
    >
      {/* title */}
      <h1 className="text-5xl">
        Dash Mon[k]ey
      </h1>

      {/* tagline */}
      <p className="text-2xl text-center">
        Monkey see, Monkey do!
      </p>
    </main>
  );
}
