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
          <PrimaryButton className="flex justify-end mr-5">Cadastrar</PrimaryButton>
        </Link>

        <table className="pt-24 w-[98vw] mx-5">
          <thead className="bg-theme-blue-2 shadow-md">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-white tracking-wider rounded-tl-3xl">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white tracking-wider">Data de criação</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white tracking-wider rounded-tr-3xl">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-theme-blue-2">
            {users.data.map((user) => (
              <tr key={user.id} className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-theme-blue-2">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-theme-blue-2">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-theme-blue-2">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-theme-blue-2">{user.created_at}</td>
                <Link href={route('users.edit', {id: user.id})}>
                    <PrimaryButton className="my-2 ms-1">Editar</PrimaryButton>
                </Link>
                {/* <Link href={route('users.show', {id: user.id})}>
                    <PrimaryButton className="my-2 ms-1">Editar</PrimaryButton>
                </Link> */}
              </tr>
            ))}
          </tbody>
        <Pagination links={users.links} currentPage={users.current_page}/>
        </table>
      </div>

      
    </AuthenticatedLayout>
  )
}

export default UserIndex
