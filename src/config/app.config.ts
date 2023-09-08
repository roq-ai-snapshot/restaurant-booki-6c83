interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Search for restaurants',
    'View restaurant menus',
    'Make a restaurant reservation',
    'Edit reservation details',
    'Cancel a restaurant reservation',
  ],
  ownerAbilities: [
    'Manage restaurant on the app',
    'View all reservations for the restaurant',
    'Invite Chef to the app',
    "Manage restaurant's menu",
    'Accept invitation to join the app',
    'Manage dishes on the menu',
    'Search for a restaurant',
    "View restaurant's menu",
    'Make a reservation',
    'Edit reservation',
    'Cancel reservation',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/98511aa3-d035-4e28-84ff-5ca4e85162c0',
};
