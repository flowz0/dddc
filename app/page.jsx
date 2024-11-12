import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <h1>Hello, World!</h1>
      <Button>Press me</Button>
    </NextUIProvider>
  );
}
