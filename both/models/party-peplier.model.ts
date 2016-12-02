import { CollectionObject } from './collection-object.model'

export class PartyReplier extends CollectionObject {
    _id_owner?: string;
    _id_users_agreed: string[];
    _id_users_in_thought: string[];
    _id_users_refused: string[];
}