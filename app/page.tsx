import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="h-dvh w-screen py-10 flex flex-col gap-10 px-10 bg-gray-100">
      <div className="flex gap-4">
        <Button variant={"primary"} size={"lg"} />
        <Button variant={"secondry"} size={"lg"} />
        <Button variant={"outline"} size={"lg"} />
        <Button />
      </div>
      <div className="flex gap-4">
        <Badge variant={"success"} size={"sm"} />
        <Badge variant={"error"} rounded />
        <Badge variant={"warning"} rounded />
        <Badge variant={"info"} rounded />
      </div>
    </main>
  );
}
