import React from 'react';
import MainGrid from '../src/components/styles/MainGrid';
import Box from '../src/components/styles/Box';
import ProfileSidebar from '../src/components/ProfileSidebar';
import SocialBox from '../src/components/SocialBox';
import { AlurakutMenu } from '../src/lib/AluraCommons';



export default function Home() {
  const [comunidades, setComunidades] = React.useState([]);
  const githubUser = 'galegogts';
  const amigos = ['galegogts','galegogts','galegogts','galegogts','galegogts','galegogts'];

  return (<>
    <AlurakutMenu githubUser={githubUser} />
    <MainGrid>
      <div className='profileArea'>
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div className='welcomeArea'>
        <Box>
          <h1 className='title'>
            Bem Vindo(a)
            { /* <OrkutNostalgicIconSet/> */}
          </h1>
        </Box>
        <Box>
          <h2>O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateComunity(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              const novaComunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              };

              const comunidadesAtualizadas = [...comunidades, novaComunidade]
              setComunidades(comunidadesAtualizadas);
            }}>
              <div>
                  <input 
                    placeholder='Qual vai ser o nome da sua comunidade?' 
                    name='title' 
                    aria-label='Qual vai ser o nome da sua comunidade?'
                    type="text"
                    />
                </div>
              <div>
                  <input 
                    placeholder='Coloque uma URL para usarmos de capa' 
                    name='image' 
                    aria-label='Coloque uma URL para usarmos de capa'
                    />
                </div>
                <button>
                  Criar comunidade
                </button>
            </form>
        </Box>
      </div>
      <div className='profileRelationsArea'>
        <SocialBox title="Comunidades" social={comunidades} />
        <SocialBox title="Amigos" social={amigos} />
      </div>
    </MainGrid>
    </>)
}
