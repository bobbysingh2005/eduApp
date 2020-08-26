import db from './db';
import { UserSchema } from './mongo-schema';

export const Users = db.model('users', UserSchema);
