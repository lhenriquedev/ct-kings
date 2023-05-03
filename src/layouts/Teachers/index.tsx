import TeacherCard from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { teachersList } from "@/constants";

export default function Teachers() {
  return (
    <section id="teachers" className="bg-white">
      <div className="max-w-screen-xl text-center px-4 py-16 mx-auto mt-[113px]">
        <SectionTitle
          title="Professores"
          description="Temos professores qualificados!"
          textColor="dark"
        />

        <div className="flex flex-wrap items-center justify-center gap-12 mt-12">
          {teachersList.map((teacher) => (
            <TeacherCard key={teacher.id} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
