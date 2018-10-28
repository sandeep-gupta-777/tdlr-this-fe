export interface IUser {
  id?: number,
  uid?: string,
  last_login?: string,
  is_superuser?: boolean,
  enterprise_id?: number,
  role_id?: number,
  email?: string,
  phoneNumber?: string,
  isAnonymous?: boolean,
  photoURL?: string,
  first_name?: string,
  last_name?: string,
  is_active?: boolean,
  is_admin?: boolean,
  date_joined?: string,
  auth_token?: string,
  user_access_token?: string
  role?: {
    'resource_uri'?: string,
    'permissions'?: {
      'actions'?: number[],
      'bots'?: number[]
    },
    'id'?: number,
    'name'?: string,
    'enterprise_id'?: number,
    'is_system_role'?: boolean,
    'session_expiry_time'?: number,
    'created_by'?: number,
    'updated_by'?: number,
    'created_at'?: boolean,
    'updated_at'?: string
  }
}



