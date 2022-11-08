import React from 'react';
import MainGrid from '../src/components/styles/MainGrid';
import Box from '../src/components/styles/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(props){
  return(    
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} />
      <hr />
      <p>
        <a className='boxLink' href={`https://github.com/${props.githubUser}`}> 
          @{props.githubUser} 
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([]);
  const githubUser = 'galegogts';
  const amigos = ['galegogts','galegogts','galegogts','galegogts','galegogts','galegogts'];

  return (<>
    <AlurakutMenu />
    <MainGrid>
      <div className='profileArea'>
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div className='welcomeArea'>
        <Box>
          <h1 className='title'>
            Bem Vindo(a)
            <OrkutNostalgicIconSet/>
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
        <ProfileRelationsBoxWrapper>
          <h2 className='smallTittle'>
            Amigos ({amigos.length})
          </h2>
          <ul>
            {amigos.map((e, index) => {
              return(
                <li key={index}>
                  <a href={`/users/${e}`}>
                    <img src={`https://github.com/${e}.png`} />
                    <span>{e}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className='smallTittle'>
            Comunidades ({comunidades.length})
          </h2>
          <ul>
            {comunidades.map((e) => {
              return(
                <li key={id}>
                  <a href={`/users/${e.title}`}>
                    <img src={e.image} />
                    <span>{e.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>)
}
