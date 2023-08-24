import { Linkedin, GitHub, MessageSquare, Mail } from 'react-feather';

export default function SocialMock() {
  return (
    <div className="mb-4 flex items-center justify-around rounded-lg  bg-foreground/10 py-4">
      <Linkedin className="text-foreground " size={25} />
      <GitHub className="text-foreground" size={25} />
      <MessageSquare className="text-foreground" size={25} />
      <Mail className="text-foreground" size={25} />
    </div>
  );
}
