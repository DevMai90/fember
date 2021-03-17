import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamRoute extends Route {
  // This is what is passed in to the @model attribute in the parent route.
  // It is a key/value pair
  async model({ teamId }) {
    const response = await fetch(`/api/teams/${teamId}`);
    return response.json();
  }
}
