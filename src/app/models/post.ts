import { User } from '../models/user'
import { Province } from '../models/province'
export class Post {
  id? : string
  title: any
  photo : any
  description : any
  address : any
  users_id?: User
  provinces_id? : Province
}
