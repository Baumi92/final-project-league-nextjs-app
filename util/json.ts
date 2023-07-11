import json from 'secure-json-parse';

export function parseJson(
  stringifiedJson: string,
): undefined | CookieCommentItem[] {
  if (!stringifiedJson) return undefined;

  try {
    return json(stringifiedJson);
  } catch {
    return undefined;
  }
}
