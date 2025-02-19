import { Button } from "@/components/Buttons";
import { IconButton } from "@/components/IconButton";
import { Input } from "@/components/Input";
import { ArrowRight, Copy } from 'lucide-react'
export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <Input type="email" />
      </div>

    </main>
  );
}
