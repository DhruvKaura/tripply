import { Badge } from "@/components/ui/badge";

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
        </div>
      </section>
    </div>
  );
}
