import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props){
  console.log(props);
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}} />
    </Box>
  )
}

export default function Home() {

  const githubUser = 'juunegreiros';
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto',
    'Carlos-Claro',
    'peas',
    'marcosbrunodev'
  ];

  return (
    <div>
    <AlurakutMenu />
    <MainGrid>
      <div style={{gridArea: 'profileArea'}} >
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="">
            Bem vindo
          </h1>
          <OrkutNostalgicIconSet confiavel="2" legal="3" sexy="1"/>
        </Box>
      </div>
      <div style={{gridArea: 'profileRelationsArea'}} className="profileRelationsArea">
        <ProfileRelationsBoxWrapper>
          <h2 className="smalltitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
          {pessoasFavoritas.map((item) => {
            return (
              <li>
                <a href={`/users/${item}`} key={item}>
                <img src={`https://github.com/${item}.png`} />
                <span>{item}</span>
              </a>

              </li>
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
      
    </MainGrid>
    </div>
  )
}
