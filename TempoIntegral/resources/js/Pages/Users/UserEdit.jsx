import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import styled from 'styled-components';

import InputLabel from '@/Components/InputLabel';
import { useForm, usePage, Head } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import SectionTitle from '@/Components/SectionTitle';

const Section = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const UserEdit = ({user}) => {
  const page = usePage();

  const { data, setData, put, processing, errors, reset } =
    useForm({
      id: user.id || '',
      name: user.name ||'',
      email: user.email || '',
    });

  const submit = (e) => {
    e.preventDefault();
    put(route('users.update', {user: user.id}));
  };

  return (
    <AuthenticatedLayout
      title="Cadastro > Usuários"
    >
      <Head title='Cadastro de Usuários'/>
      <div className='w-full h-full flex flex-col item-center justify-center'>
        <form onSubmit={submit} className='w-full h-full px-10 py-2 pb-4 flex flex-col gap-y-14'>
          <Section>
            <div className='w-full ml-7 mt-3'>
              <SectionTitle className='text-xl' title="Informações do usuário" />
            </div>

            <div className='w-full h-auto flex flex-wrap items-center justify-around pb-5 px-5'>
              <div className='mt-4'>
                <InputLabel htmlFor="name" value="Nome" />
                <TextInput
                  id="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  type="text"
                  className="block w-full mt-1"
                  required
                  autoFocus
                  autoComplete="name"
                />
                <InputError className="mt-2" message={errors.name} />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  type="email"
                  className="block w-full mt-1"
                  autoComplete="username"
                />
                <InputError className="mt-2" message={errors.email} />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="password" value="Senha" />
                <TextInput
                  id="password"
                  value={data.password}
                  onChange={(e) =>
                    setData('password', e.target.value)
                  }
                  type="password"
                  className="block w-full mt-1"
                  autoComplete="new-password"
                  disabled={true}
                />
                <InputError
                  className="mt-2"
                  message={errors.password}
                />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="password_confirmation"
                  value="Confirme a senha"
                />
                <TextInput
                  id="password_confirmation"
                  value={data.password_confirmation}
                  onChange={(e) =>
                    setData('password_confirmation', e.target.value)
                  }
                  type="password"
                  className="block w-full mt-1"
                  disabled={true}
                  autoComplete="new-password"
                />
                <InputError
                  className="mt-2"
                  message={errors.password_confirmation}
                />
              </div>
            </div>
          </Section>

          <Section>
              <div className='w-full ml-7 mt-3'>
                <SectionTitle className='text-xl' title="Permissões de usuário (WIP - Não implementado)" />

                <div className='h-auto flex items-center justify-around flex-wrap flex-1/3 pb-5 px-5'>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                </div>

              </div>

            </Section>
          <div className="flex items-center justify-end">
            <PrimaryButton
              className={`ms-4 ${processing ? 'opacity-25' : ''}`}
              disabled={processing}
            >
              Salvar
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticatedLayout >
  )
}

export default UserEdit