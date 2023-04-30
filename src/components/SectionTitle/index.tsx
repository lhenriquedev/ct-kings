type SectionTitleProps = {
  title: string;
  description?: string;
  textColor?: "dark" | "white";
};

export default function SectionTitle({
  title,
  description,
  textColor = "white",
}: SectionTitleProps) {
  return (
    <header className="relative">
      <h2
        className={`inline-block text-3xl ${
          textColor === "dark" ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 ${
            textColor === "dark" ? "text-black" : "text-white"
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
