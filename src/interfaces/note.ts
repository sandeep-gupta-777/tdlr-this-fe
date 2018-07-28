export interface INote{
  _id?:string,
  note_title?: string,
  note_body_text?: string,
  note_body_html?: string,
  note_created?: number,
  note_updated?: number,
  note_tags?: [string],
  note_author_name?:string,
  note_author_id?:string,
  note_author_avatar_url?:string,
}
