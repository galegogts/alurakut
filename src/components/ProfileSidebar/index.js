
import ProfileSidebarMenuDefault from '../ProfileSidebarMenuDefault';
import Box from '../styles/Box';

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
        <ProfileSidebarMenuDefault />
      </Box>
    );
}

export default ProfileSidebar;