import type { APIRoute } from 'astro';
import questions from '../../data/question.json';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(questions), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
