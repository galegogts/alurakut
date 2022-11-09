
import styled from 'styled-components';

export default function ProfileSidebarMenuDefault() {
    return (
      <ProfileSidebarMenuDefault.Wrapper>
        <nav>
          <a href="/">
            <img src='icons/user.svg' />
              Perfil
            </a>
          <a href="/">
            <img src='icons/plus.svg' />
              Amigos
            </a>
          <a href="/">
            <img src='icons/book.svg' />
              Comunidades
            </a>
          <a href="/">
            <img src='icons/camera.svg' />
              Fotos
            </a>
          <a href="/">
            <img src='icons/video-camera.svg' />
              Videos
            </a>
          <a href="/">
            <img src='icons/sun.svg' />
              Depoimentos
            </a>
        </nav>
        <hr />
        <nav>
          <a href="/logout">
            <img src='icons/logout.svg' />
              Sair
            </a>
        </nav>
      </ProfileSidebarMenuDefault.Wrapper>
    )
  }

  ProfileSidebarMenuDefault.Wrapper = styled.div`
    a {
      font-size: 12px;
      color: #2E7BB4;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      img {
        width: 16px;
        height: 16px;
        margin-right: 5px; 
      }
    }
  `;