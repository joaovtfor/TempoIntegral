import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react"

const UserIndex = ({users}) => {
  return (
    <AuthenticatedLayout title="Relatório de Usuários">
      <Head title="Relatório de Usuários"/>
      <div className="w-full h-[100vh] bg-background flex flex-col items-end gap-y-5">

        <Link href="/register">
          <PrimaryButton className="flex justify-end">Cadastrar</PrimaryButton>
        </Link>

        <div className="bg-white text-sm rounded-lg p-4 shadow-md">
          
        </div>
      </div>

      
    </AuthenticatedLayout>
  )
}

export default UserIndex
