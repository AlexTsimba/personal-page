import { Linkedin, GitHub, MessageSquare, Mail } from 'react-feather';
import SocialLink from './SocialLink';

export default function SocialMock() {
  return (
    <div className="mb-4 flex items-center justify-around rounded-xl  ">
      <SocialLink href="https://www.linkedin.com/" title="Linkedin">
        <Linkedin className="text-foreground " size={24} />
      </SocialLink>

      <SocialLink href="https://www.github.com/" title="Github">
        <GitHub className="text-foreground" size={24} />
      </SocialLink>

      <SocialLink href="https://www.telegram.com/" title="Chat">
        <MessageSquare className="text-foreground" size={24} />
      </SocialLink>

      <SocialLink
        href="mailto:someone@example.com?subject=This%20is%20the%20subject&cc=someone_else@example.com&body=This%20is%20the%20body"
        title="Email"
      >
        <Mail className="text-foreground" size={24} />
      </SocialLink>
    </div>
  );
}
