import { validateSurvey } from '../../../../lib/waitlist';
import { completeSurvey } from '../../../../lib/supabase';
import { appendToNotes, formatSurveyNotes } from '../../../../lib/notion';

const GENERIC_ERROR = { error: 'Could not save answers' };

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(GENERIC_ERROR, { status: 400 });
  }

  const survey = validateSurvey(body);
  if (!survey.ok) return Response.json(GENERIC_ERROR, { status: 400 });

  let row;
  try {
    row = await completeSurvey(survey.id, survey.fields);
  } catch (error) {
    console.error('[waitlist/survey] Supabase update failed:', error.message);
    return Response.json(GENERIC_ERROR, { status: 500 });
  }

  // No match: unknown id, or the survey was already submitted.
  if (!row) return Response.json(GENERIC_ERROR, { status: 409 });

  // Best-effort Notion mirror. Supabase already has the answers.
  if (row.notion_page_id) {
    try {
      await appendToNotes(row.notion_page_id, formatSurveyNotes(survey.fields));
    } catch (error) {
      console.error('[waitlist/survey] Notion update failed:', error.message);
    }
  }

  return Response.json({ success: true });
}
