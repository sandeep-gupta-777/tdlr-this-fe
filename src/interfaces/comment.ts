export interface IComment{
  comment_title: string,
  comment_body_text: string,
  comment_body_html: string,
  comment_created: number,
  comment_post_id: number,
  comment_updated: number,
  comment_tags: [string],
  comment_author_name:string,
  comment_author_avatar_url:string,
}
