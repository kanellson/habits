import Image from "next/image";
import DayState from "../components/DayState";
import Link from "next/link";

export default function Home() {
  const habits = {
    "beber agua": {
      "2024-11-17": true,
      "2024-12-19": true,
      "2024-13-121": true,
    },
    "dormir cedo": {
      "2024-07-17": true,
      "2024-08-19": true,
      "2024-09-121": true,
    },
  };

  const today = new Date();
  const toDayWeekDay = today.getDay();

  const weekDays = ["Dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  const sorteWeekDays = weekDays
    .slice(toDayWeekDay + 1)
    .concat(weekDays.slice(0, toDayWeekDay + 1));

  return (
    <>
      <section className="flex justify-center gap-8 flex-col text-slate-500">
        {habits === null ||
          (Object.keys(habits).length === 0 && (
            <h1 className="text-slate-200 mt-5 text-2xl">
              Vc não tem
              <span className="text-green-300 px-1.5">habitus</span>
              cadastrados
            </h1>
          ))}

        {habits !== null &&
          Object.entries(habits).map(([habit, habitStriak]) => (
            <div key={habit} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xl font-light text-slate-200">
                  {habit} 
                </span>
                <button>
                  <Image
                    src="/images/icons/trash.png"
                    width={18}
                    height={18}
                    alt="icone de lixeira"
                  />
                </button>
              </div>
              <section className="grid grid-cols-7 bg-slate-900 rounded-md p-2">
                {sorteWeekDays.map((day) => (
                  <div
                    key={day}
                    className="flex flex-col items-center last:text-blue-500 last:font-bold"
                  >
                    <span>{day}</span>
                    <DayState day={undefined} />
                  </div>
                ))}
              </section>
            </div>
          ))}
        <Link href="novo-habito" className="w-auto text-center left-1/2 text-slate-900 text-lg font-bold bg-green-500 px-7 py-3 rounded-sm">
          Novo hábito
        </Link>
      </section>
    </>
  );
}
