import MainGrid from '../src/components/styles/MainGrid';
import Box from '../src/components/styles/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(props){
  return(    
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} />
    </Box>
  );
}

export default function Home() {
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
      </div>
      <div className='profileRelationsArea'>
        <ProfileRelationsBoxWrapper>
          <h2 className='smallTittle'>
            Amigos ({amigos.length})
          </h2>
          <ul>
            {amigos.map((e) => {
              return(
                <li>
                  <a href={`/users/${e}`} key={e}>
                    <img src={`https://github.com/${e}.png`} />
                    <span>{e}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
    </>)
}
