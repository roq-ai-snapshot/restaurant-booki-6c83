import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  invited_by: string;
  invitee: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user_invitation_invited_byTouser?: UserInterface;
  user_invitation_inviteeTouser?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  invited_by?: string;
  invitee?: string;
  restaurant_id?: string;
}
