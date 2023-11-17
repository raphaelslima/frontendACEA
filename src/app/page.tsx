import Dashboard from "@/components/Dashboard";
import Form from "@/components/Form";


export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start gap-8 p-8 bg-green-500">
      <Form/>
      <Dashboard/>
    </main>
  )
}
