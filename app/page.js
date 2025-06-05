import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-purple-100 text-purple-700">Split Expenses. Simplify Life.</Badge>
          <h1 className=" gradient-title mx-auto max-w-5xl text-4xl md:text-7xl">
            The smartest way to split the expenses with friends
          </h1>
          <p className="mx-auto max-w-[600] text-gray-500 md:text-xl/relaxed">Track shared expenses, split bills effortlessly, and settle up quickly. All at one place. </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4" >
              <Button 
              asChild
              size={'lg'}
              className="bg-purple-600 hover:bg-purple-700">
              <Link href="/dashboard">Get Started
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size={'lg'}
              className="border-purple-600 text-purple-700 hover:bg-purple-50">
              <Link href="#how-it-works">How It Works
                {/* <ArrowRight className="ml-2 h-4 w-4"/> */}
              </Link>
            </Button>
            </div>
        </div>
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/hero.png"
              height={720}
              width={1280}
              alt="banner"
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge 
            variant="outline" 
            className="bg-purple-100 text-purple-700">
            Features
          </Badge>
          <h2 className=" gradient-title mx-auto max-w-5xl text-3xl md:text-4xl">
            Everything you need to split expenses
          </h2>
          <p className="mx-auto max-w-[600] text-gray-500 md:text-xl/relaxed">
          Our Platform provide all the tools to experience this split expenses 
          </p>
        </div>
      </section>
    </div>
  );
}
