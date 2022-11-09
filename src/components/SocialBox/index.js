
import { ProfileRelationsBoxWrapper } from '../styles/ProfileRelations';

function SocialBox(props){
    return(          
      <ProfileRelationsBoxWrapper>
      <h2 className='smallTittle'>
        {props.title} ({props.social.length})
      </h2>
      <ul>
        {props.social.map((e, index) => {
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
    );
}

export default SocialBox;