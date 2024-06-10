import Link from "next/link";

export default function NewHabit() {
  async function newHabit(formData: FormData) {
      "use server"
      const habit = formData.get("habit");
      console.log(habit);
      
  }
   return (
    <div>
      <section className="flex justify-center flex-col">
        <h2 className="flex justify-between text-green-300 text-2xl">
          Novo habito
          <Link href="/">
            <span className="px-4 inline-flex -rotate-45 hover:text-blue-700  transition text-slate-300">
              ↺
            </span>
          </Link>
        </h2>

        <form
          action={newHabit}
          className="flex flex-col border-s-pink-300 text-slate-300 mt-5"
        >
          <input
            type="text"
            name="habit"
            id="habit"
            placeholder="nome"
            className="bg-neutral-900 px-3 py-2 rounded-md outline-none text-xl relative"
          />

          <div className="flex justify-around gap-5 mt-5 text-sm font-semibold">
            <button
              type="submit"
              className="bg-slate-900 flex-1 py-2 rounded-md text-green-500 uppercase"
            >
              Cadastrar
            </button>
            <button className="bg-slate-900 flex-1 py-2 rounded-md text-red-500 uppercase">
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
