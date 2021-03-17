import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamChannelRoute extends Route {
  async model({ channelId }) {
    // We need some info from the parent route
    const { teamId } = this.paramsFor('teams.team');

    const response = await fetch(`/api/teams/${teamId}/channels/${channelId}`)
    // debugger;
    return response.json();
  }
}
