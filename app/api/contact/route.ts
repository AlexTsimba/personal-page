import { TG_CHAT_ID, TG_URI_API } from '@/constants/constants';
import { escapeSpecialCharacters } from '@/lib/utils';

interface FormData {
  name: string;
  company: string;
  message: string;
  email: string;
}

export async function POST(req: Request) {
  const data: FormData = await req.json();
  const escapedData: Partial<FormData> = {};

  // Iterate through the properties of the 'data' object to sanitize the values.
  // This loop ensures that special characters in the data are properly escaped
  // using the escapeSpecialCharacters function before further processing.

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      escapedData[key as keyof FormData] = escapeSpecialCharacters(
        data[key as keyof FormData]
      );
    }
  }

  const { name, company, email, message } = escapedData;

  const payload = `
    *New contact form submission*: \n
    *${name}* from *${company}*
    message: ${message} \n
    reply: ${email}`;

  const response = await fetch(TG_URI_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TG_CHAT_ID,
      parse_mode: 'MarkdownV2',
      text: payload,
    }),
  });

  return response;
}
