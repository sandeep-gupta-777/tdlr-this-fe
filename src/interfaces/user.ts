export interface IUser{
  _id?:string,

  user_name? : string,
  user_email? : string,
  user_avatar_url?:string,
  user_password? : string,
  user_password_hashed? : string,
  user_created? : Date,
  user_updated? : Date,
  user_notes_count? : number,
  user_followers_count? : number,
  user_following_count? : number,
  user_works_at? :string,
  user_reputation? :string,
  user_tags? :string[]
}
