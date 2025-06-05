export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="text-gray-900 mb-2 tracking-[-.01em]">
            Elige un juego de la lista de la izquierda y haz clic en él para comenzar.
          </li>
        </ol>

      </main>
    </div>
  );
}
