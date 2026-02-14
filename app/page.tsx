import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="h-full w-screen py-10 flex justify-center gap-4 bg-cyan-700">
      <Button variant={"primary"} size={"lg"} />
      <Button variant={"secondry"} size={"lg"} />
      <Button variant={"outline"} size={"lg"} />
      <Button />
    </main>
  );
}
