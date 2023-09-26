import Dictionary from '@/types/Dictionary';
import Link from 'next/link';
import { PhoneCall, AtSign, Linkedin, MapPin } from 'react-feather';

interface DetailsProps {
  dict: Dictionary['contactDetails'];
}

export default function Details({ dict }: DetailsProps) {
  const details = [
    {
      title: dict.region,
      icon: <MapPin className="text-accent" size={30} />,
      content: dict.currentLocation,
    },
    {
      title: dict.telephone,
      icon: <PhoneCall className="text-accent" size={30} />,
      content: '+38 (068) 522-22-44',
      action: 'tel:',
    },
    {
      title: dict.mailto,
      icon: <AtSign className="text-accent" size={30} />,
      content: 'alexander.tsimba@gmail.com',
      action: 'mailto:',
    },

    {
      title: 'LinkedIn profile',
      icon: <Linkedin className="text-accent" size={30} />,
      content: 'alex-tsimba',
      action: 'https://www.linkedin.com/in/',
    },
  ];

  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex flex-col gap-14 font-medium">
        <span className="text-3xl font-bold leading-relaxed text-accent after:content-['?']">
          {dict.title}
        </span>
        <div>
          <p className="after:content-[',']">{dict.description}</p>
          <p> {dict.proposal}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
        {details.map((detail) => (
          <div key={detail.title} className="flex items-center gap-3 ">
            {detail.icon}
            <div className="flex flex-col">
              <span className=" text-lg font-semibold capitalize leading-tight text-accent after:content-[':']">
                {detail.title}
              </span>

              {detail.action ? (
                <Link
                  className="text-md font-medium lg:text-lg"
                  target="_blank"
                  href={`${detail.action}${detail.content}`}
                >
                  {detail.content}
                </Link>
              ) : (
                <span className="text-md font-medium lg:text-lg">
                  {detail.content}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
