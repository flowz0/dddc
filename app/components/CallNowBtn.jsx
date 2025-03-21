import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

export default function CallNowBtn() {
  return (
    <Button
      className="fixed shadow-2xl font-bold right-4 bottom-16 z-50 text-[#F5F5F7] bg-[#FF3B3F] sm:hidden"
      radius="full"
      size="lg"
      as={Link}
      startContent={<FaPhone />}
      href="tel:+18167082608"
    >
      Call Now
    </Button>
  );
}
