import Alert from "@/components/ui/Alert";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Button2 from "@/components/ui/Button2";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="h-dvh w-screen py-10 flex flex-col gap-10 px-10">
      <div className="flex gap-4">
        <Button variant={"primary"} size={"md"} />
        <Button variant={"secondry"} size={"md"} />
        <Button variant={"outline"} size={"md"} />
        <Button variant={"secondry"} size={"sm"} />
      </div>
      <div className="flex gap-4">
        <Badge variant={"success"} size={"sm"} />
        <Badge variant={"error"} size={"md"} rounded />
        <Badge variant={"warning"} />
        <Badge variant={"info"} rounded />
      </div>
      <div className="flex gap-4">
        <Alert type={"success"} alertMessage="Are you sure!!" />
        <Alert type={"warning"} alertMessage="Are you sure!!" />
        <Alert type={"error"} alertMessage="Are you sure!!" withIcon />
      </div>
      <div className="w-full flex gap-4">
        <Button2 children={"primary"} size={"sm"} />
        <Button2 children={"primary"} />
        <Button2 children={"primary"} size={"lg"} loading />
        <Button2 children={"secondary"} variant={"secondary"} loading />
        <Button2 children={"ghost"} variant={"ghost"} />
        <Button2 children={"outline"} variant={"outline"} />
        <Button2 children={"ghost"} variant={"ghost"} fullWidth />
      </div>
      <div className="w-full flex gap-4">
        <Input placeholder="Enter your name..." />
        <Input placeholder="Enter your name..." size={"md"} />
        <Input placeholder="Enter your name..." size={"lg"} />
        <Input placeholder="Enter your name..." size={"sm"} error />
        <Input placeholder="Enter your name..." size={"sm"} error disabled />
      </div>
    </main>
  );
}
