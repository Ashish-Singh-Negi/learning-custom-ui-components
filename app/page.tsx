import Toast from "@/components/ui/Toast";
import Alert from "@/components/ui/Alert";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Button2 from "@/components/ui/Button2";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Model from "@/components/ui/Model";

export default function Home() {
  return (
    <main className="h-dvh w-screen py-10 flex flex-col gap-10 px-10">
      <div className="flex gap-4">
        <Button variant={"primary"} size={"md"} />
        <Button variant={"secondary"} size={"md"} />
        <Button variant={"outline"} size={"md"} />
      </div>
      <div className="flex gap-4">
        <Badge variant={"success"} size={"md"} />
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
      <div className="flex gap-4">
        <Card>
          <div className="h-32 w-60 bg-amber-100 rounded-md"></div>
          <div className="font-medium my-1">Flat card</div>
          <p className="w-60 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum aliquam, ipsum aut officia quibusdam sapiente iusto possimus
            error natus in commodi quae cum molestias illo cumque repellendus at
            earum!
          </p>
        </Card>
        <Card variant={"elevated"}>
          <div className="h-32 w-60 bg-amber-100 rounded-md"></div>
          <div className="font-medium my-1">Elevated Card</div>
          <p className="w-60 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum aliquam, ipsum aut officia quibusdam sapiente iusto possimus
            error natus in commodi quae cum molestias illo cumque repellendus at
            earum!
          </p>
        </Card>
        <Card variant={"flat"} tone={"danger"}>
          <div className="h-32 w-60 bg-amber-100 rounded-md"></div>
          <div className="font-medium my-1">Danger tone card</div>
          <p className="w-60 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum aliquam, ipsum aut officia quibusdam sapiente iusto possimus
            error natus in commodi quae cum molestias illo cumque repellendus at
            earum!
          </p>
        </Card>
        <Card variant={"flat"} tone={"danger"} interactive>
          <div className="h-32 w-60 bg-amber-100 rounded-md"></div>
          <div className="font-medium my-1">Danger tone + Interactive card</div>
          <p className="w-60 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum aliquam, ipsum aut officia quibusdam sapiente iusto possimus
            error natus in commodi quae cum molestias illo cumque repellendus at
            earum!
          </p>
        </Card>
        <Card variant={"flat"} tone={"success"} interactive>
          <div className="h-32 w-60 bg-amber-100 rounded-md"></div>
          <div className="font-medium my-1">
            success tone + Interactive card
          </div>
          <p className="w-60 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum aliquam, ipsum aut officia quibusdam sapiente iusto possimus
            error natus in commodi quae cum molestias illo cumque repellendus at
            earum!
          </p>
        </Card>
      </div>
      <div className="w-full flex gap-4">
        {/* <Model size={"lg"} centered blurBackground>
          <h2 className="p-2 bg-black text-white">Title goes here</h2>
          <p className="p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            vero adipisci maiores consectetur excepturi voluptates eligendi iure
            numquam pariatur nam, ducimus aliquid at soluta, ipsum vel nemo
            consequuntur debitis sit.
          </p>
        </Model> */}
      </div>
      {/* Toast */}
      <Toast type={"success"} children={"success toast"} />
      <Toast type={"error"} position={"bottom-left"} children={"error toast"} />
    </main>
  );
}
