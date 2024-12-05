import { useForm } from "@inertiajs/react"
import PrimaryButton from "./PrimaryButton"

const DeleteButton = ({id, routeName}) => {
  const {delete: destroy} = useForm();

  const handleDelete = () => {
    destroy(route(routeName, {id: id}));
  }

  return (
    <PrimaryButton className="ms-1 text-sm bg-theme-red" onClick={handleDelete}>
        Apagar
    </PrimaryButton>
  )
}

export default DeleteButton
